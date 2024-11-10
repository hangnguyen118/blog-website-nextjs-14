import { Container, SimpleGrid } from "@mantine/core";
import { Hero } from "./_components/Hero/Hero";
import { BadgeCard } from "./_components/BadgeCard/BadgeCard";
import classes from './style.module.css';

export default function Home() {
  return (
    <main>
      <Hero />
      <Container size='xl'>
        <div className={classes.blogSection}>
          <SimpleGrid cols={{ base: 1, sm: 3}} spacing="lg">
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
          </SimpleGrid>
        </div>
      </Container>
    </main>
  );
}
