import { Container } from "@mantine/core";
import { Hero } from "./_components/Hero/Hero";
import classes from './style.module.css';
import { fetchBlogArticles } from "@/untils/strapi.utils";
import BlogsGrid from "./_components/BlogsGrid/BlogsGrid";

export default async function Home() {
  const blogsData = await fetchBlogArticles();
  return (
    <main className={classes.main}>
      <Hero />
      <Container size='lg'>
        <div className={classes.blogSection}>
          <BlogsGrid list={blogsData}/>
        </div>
      </Container>
    </main>
  );
}

export const revalidate = 300;