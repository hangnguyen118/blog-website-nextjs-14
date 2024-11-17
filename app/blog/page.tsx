import { SimpleGrid, Text } from "@mantine/core";
import { BadgeCard } from "../_components/BadgeCard/BadgeCard";
import { fetchDataFromStrapi, processInfoBlogs } from "@/untils/strapi.utils";

export default async function Page() {
    const data = await fetchDataFromStrapi('api/blogs?populate=*');
    const blogsData = processInfoBlogs(data);
    const blogCards = blogsData.map((item) => (
        <BadgeCard key={item.id} image={item.previewImage} title={item.title} description={item.description} country={item.country}/>
    ))

    return (
        <>
            <Text size="xl" fw={900} variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }} mt="md" mb="md">
                Blog mới nhất 2024!
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
                {blogCards}
            </SimpleGrid>
        </>
    )
}
