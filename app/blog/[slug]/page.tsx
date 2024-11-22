import { BlogCardProps } from "@/types";
import { fetchBlogArticles, formatDate } from "@/untils/strapi.utils";
import { Grid, GridCol, Group, Text } from "@mantine/core";
import { remark } from 'remark';
import html from 'remark-html';
import classes from './style.module.css';
import UserCard from "@/app/_components/UserCard/UserCard";

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const articles = await fetchBlogArticles();
    const article: BlogCardProps = articles.find((article: BlogCardProps) => article.slug === slug);
    const processedContent = await remark()
        .use(html)
        .process(article.content);
    const contentHtml = processedContent.toString();
    const authorLists = [
        {
            id: "1",
            name: "Smaile soala",
            status: "Build even faster with Mantine UI. 120+",
            avatarImage: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        },
        {
            id: "4",
            name: "Smaile soala",
            status: "Build even faster with Mantine UI. 120+",
            avatarImage: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        },
        {
            id: "2",
            name: "Smaile soala",
            status: "Build even faster with Mantine UI. 120+",
            avatarImage: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        },
        {
            id: "3",
            name: "Smaile soala",
            status: "Build even faster with Mantine UI. 120+",
            avatarImage: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        },
    ]
    const usercards = authorLists.map((user) => (
        <UserCard key={user.id} name={user.name} status={user.status} avatarImage={user.avatarImage}/>
    ))
    return (
        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
            <GridCol span={{ base: 12, md: 8 }}>
                <h1>{article.title}</h1>
                <Text>Published by Reilly Media, Inc.</Text>
                <div dangerouslySetInnerHTML={{ __html: contentHtml ?? '' }} className={classes.wrapper} />
            </GridCol>
            <GridCol span={{ base: 12, md: 4 }}>
                <Text size="lg" fw={500}>{formatDate(article.updatedAt)}</Text>
                <Text>Your Hosts and Guests</Text>
                <Group>
                {usercards}
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
