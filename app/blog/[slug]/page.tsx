import { BlogCardProps } from "@/types";
import { fetchBlogArticles, formatDate } from "@/untils/strapi.utils";
import { Button, Grid, GridCol, Group, Text } from "@mantine/core";
import { remark } from 'remark';
import html from 'remark-html';
import classes from './style.module.css';
import UserCard from "@/app/_components/UserCard/UserCard";
import { IconArrowLeft } from "@tabler/icons-react";
import ButtonLink from "@/app/_components/ButtonLink/ButtonLink";

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const articles = await fetchBlogArticles();
    const article: BlogCardProps = articles.find((article: BlogCardProps) => article.slug === slug);
    const processedContent = await remark()
        .use(html)
        .process(article.content);
    const contentHtml = processedContent.toString();
    const author = {
            id: "1",
            name: "Smaile soala",
            status: "Build even faster with Mantine UI. 120+",
            avatarImage: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        }
    return (
        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
            <GridCol span={{ base: 12, md: 8 }}>
                <h1>{article.title}</h1>
                <Text>Published by Reilly Media, Inc.</Text>
                <div dangerouslySetInnerHTML={{ __html: contentHtml ?? '' }} className={classes.wrapper} />
                <ButtonLink name='Quay lại trang blog' href={'/blog/'} style='1'></ButtonLink>
            </GridCol>
            <GridCol span={{ base: 12, md: 4 }}>
                <Text size="lg" fw={500}>{formatDate(article.updatedAt)}</Text>
                <Text>Your Hosts and Guests</Text>
                <Group>
                <UserCard key={author.id} name={author.name} status={author.status} avatarImage={author.avatarImage}/>
                </Group>
            </GridCol>
        </Grid>
    )
}

export async function generateStaticParams() {
    const posts = await fetchBlogArticles();
    return posts.map((post: BlogCardProps) => ({
        slug: post.slug,
    }));
}

export const dynamicParams = false;
