"use client"
import { useToggle, upperFirst, useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Checkbox,
  Anchor,
  Stack,
  Loader,
  LoadingOverlay,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { TypeAuth } from '@/types';
import { authService } from '@/app/_services/AuthService';
import messageBoxService from '@/app/_services/MessageBoxService';
import { setCookie } from '@/app/_services/CookieService';
import { useDispatch } from 'react-redux';
import { setUser } from '@/app/_store/userSlice';
import userService from '@/app/_services/UserService';

export function AuthenticationForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [type, toggle] = useToggle<TypeAuth>(['login', 'register']);
  const [visible, handlers] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      email: '',
      username: '',
      password: '',
      terms: true,
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const handleSubmit = async () => {
    const successMessage = type === 'login' ? 'Đăng nhập thành công!' : 'Đăng ký thành công!';
    const errorMessage = type === 'login' ? 'Đăng nhập không thành công!' : 'Đăng ký không thành công!'
    try {
      handlers.open();
      const response = await authService[type](form.values);
      if (response.status === 200) {
        setCookie(response.data.jwt);

        const res = await userService.getData(response.data.jwt);
          if (res.status === 200) {
            dispatch(setUser(res.data));
          }
        messageBoxService.notify(successMessage);
        router.push('/');
      }
    } catch (error){
      console.log(error);
      messageBoxService.error(errorMessage);
    } finally {
      handlers.close();
    }
  }
  return (
    <Paper radius="md" p="xl" withBorder={true} pos="relative">
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ color: 'pink', type: 'bars' }}
      />
      <Text size="lg" fw={500}>
        Welcome to Mantine, {type} with
      </Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.username}
              onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
              radius="md"
            />
          )}
          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />
          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />
          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>
        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
            {
              visible && <Loader color="white" ml={8} size={12} />
            }
          </Button>
        </Group>
      </form>
    </Paper>
  );
}