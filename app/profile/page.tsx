'use client'
import { Button, Container, Group, Paper, Text, TextInput } from "@mantine/core";
import { deleteCookie } from "../_services/CookieService";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../_store/userSlice";
import { RootState } from "../_store/store";
import { useForm } from "@mantine/form";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user);

  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  useEffect(() => {
    form.setValues({ email: currentUser.email});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser.email]);

  const handleLogout = () => {
    deleteCookie('jwt');
    dispatch(clearUser());
    router.push('/');
  }
  const handleEditProfile = () => {
    console.log(currentUser.email);
  }
  return (
    <main>
      <Container size='xs' mt='8rem'>
        <Text size="xl">Profile page</Text>
        <Paper shadow="xs" p="xl">
          <form onSubmit={form.onSubmit(handleEditProfile)}>
            <TextInput
              withAsterisk
              label="Email"
              placeholder={currentUser.email}
              key={form.key('email')}
              {...form.getInputProps('email')}
            />
            <Group justify="flex-end" mt="md">
              <Button type="submit" variant="light">Edit profile</Button>
              <Button onClick={handleLogout}>Logout</Button>
            </Group>
          </form>
        </Paper>
      </Container>
    </main>
  )
}
