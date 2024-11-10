import { Container } from "@mantine/core";
import { AuthenticationForm } from "../_components/AuthenticationForm/AuthenticationForm";
import classes from './Login.module.css';
export default function page() {
  return (
    <main>
        <Container size='xs' mt='8rem'>
        <AuthenticationForm/>
        </Container>
    </main>
  )
}
