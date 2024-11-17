import { Container } from "@mantine/core";
import classes from './About.module.css';

export default function Home() {
  return (
    <main>
      <Container size='xl'>
        <div className={classes.blogSection}>
          <h2>ABOUT PAGE</h2>
        </div>
      </Container>
    </main>
  );
}
