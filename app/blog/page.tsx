import { Text } from "@mantine/core";
import { fetchBlogArticles } from "@/untils/strapi.utils";
import { HighlightArticle } from "../_components/HighlightArticle/page";
import { ContactSection } from "../_components/ContactSection/page";
import BlogsGrid from "../_components/BlogsGrid/BlogsGrid";
import { BlogCardProps } from "@/types";

export default async function Page() {    
    const blogsData = await fetchBlogArticles();
    const hightArticleData: BlogCardProps = {
        id: "1",
        updatedAt: "19-02-2001",
        previewImage: "http://localhost:1337/uploads/R_38b4f3c293.jfif",
        title: "A modern React components library",
        description: "Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components and hooks to cover you in any situation",
        highlight: 'modern',
        slug: 'ocean-1'
    }
    return (
        <>
            <HighlightArticle data={hightArticleData}/>
            <ContactSection />
            <Text size="xl" fw={900} variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }} mt="md" mb="md">
                Blog mới nhất 2024!
            </Text>
            <BlogsGrid list={blogsData}/>
        </>
    )
}

export const revalidate = 300;
