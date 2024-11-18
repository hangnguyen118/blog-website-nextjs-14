import { SimpleGrid, Text } from "@mantine/core";
import { BadgeCard } from "../_components/BadgeCard/BadgeCard";
import { fetchBlogArticles } from "@/untils/strapi.utils";
import { HighlightArticle } from "../_components/HighlightArticle/page";
import { ContactSection } from "../_components/ContactSection/page";
type Badges = {
    emoji: string;
    label: string;
}
type BlogCardProps = {
    id: string;
    previewImage: string;
    title: string;
    country: string;
    description:
        string;
    badges?: Badges[],
};

export default async function Page() {
    const blogsData = await fetchBlogArticles();
    const blogCards = blogsData.map((item: BlogCardProps) => (
        <BadgeCard key={item.id} previewImage={item.previewImage} title={item.title} description={item.description} country={item.country}/>
    ));
    const blogHighlight = {
        image: "http://localhost:1337/uploads/R_38b4f3c293.jfif",
        title: "A modern React components library",
        descriptin: "Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components and hooks to cover you in any situation",
        highlight: 'modern'
    }

    return (
        <>
            <HighlightArticle image={blogHighlight.image} title={blogHighlight.title} description={blogHighlight.descriptin} highlight={blogHighlight.highlight}/>
            <ContactSection/>
            <Text size="xl" fw={900} variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }} mt="md" mb="md">
                Blog mới nhất 2024!
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
                {blogCards}
            </SimpleGrid>
        </>
    )
}

export const revalidate = 300;
