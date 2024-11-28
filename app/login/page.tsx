
import { Container } from "@mantine/core";
import { AuthenticationForm } from "../_components/AuthenticationForm/AuthenticationForm";

export default function page() {
  return (
    <main>
      <Container size='xs' mt='8rem'>
        <AuthenticationForm />
      </Container>
    </main>
  )
}
