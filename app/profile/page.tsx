'use client'
import { Button, Container, Group, Paper, Text, TextInput } from "@mantine/core";
import { deleteCookie } from "../_services/CookieService";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../_store/userSlice";
import { RootState } from "../_store/store";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import userService from "../_services/UserService";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user);

  const form = useForm({
    initialValues: {
      email: '',
      username: ''
    },
    validate: {
      username: (val) => {
        if (!val?.trim()) return "Username is required.";
        if (val.length < 3) return "username must be at least 3 characters";
        if (!/^[a-zA-Z0-9\s]+$/.test(val)) return "Username can only contain letters, numbers, and spaces.";
        return null;
      },
    },
  });

  useEffect(() => {
    form.setValues({ email: currentUser.email, username: currentUser.username });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const handleLogout = () => {
    deleteCookie('jwt');
    dispatch(clearUser());
    router.push('/');
  }
  const handleEditProfile = () => {
    userService.updateProfile(currentUser.id, form.values.username, form.values.email);
  }
  const handleChangePassword = () => {
    console.log('change password click')
  }
  return (
    <main>
      <Container size='xs' mt='8rem'>
        <Text size="xl">Profile page</Text>
        <Paper shadow="xs" p="xl">
          <form onSubmit={form.onSubmit(handleEditProfile)}>
            <TextInput
              withAsterisk
              label="Username"
              placeholder={currentUser.username}
              key={form.key('username')}
              {...form.getInputProps('username')}
            />
            <TextInput
              mt="md"
              withAsterisk
              label="Email"
              placeholder={currentUser.email}
              key={form.key('email')}
              {...form.getInputProps('email')}
            />
            <Group justify="space-between" mt="md">
              <Button variant="transparent" onClick={handleChangePassword}>Change your password</Button>
              <Group>
                <Button variant="light" onClick={handleLogout} >Logout</Button>
                <Button type="submit">Edit profile</Button>
              </Group>
            </Group>
          </form>
        </Paper>
      </Container>
    </main>
  )
}
