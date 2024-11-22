'use client'
import { BlogCardProps } from "@/types";
import { BadgeCard } from "../BadgeCard/BadgeCard"
import { Button, SimpleGrid, Stack } from "@mantine/core";
import { useState } from "react";

export default function BlogsGrid({ list }: { list: BlogCardProps[] }) {
    const [itemNumber, setItemNumber] = useState(3);

    const onShowMore = () => {
        if(itemNumber + 3 > list.length) {
            return setItemNumber(list.length);
        }
        else {
            return setItemNumber(itemNumber + 3);
        }
    }

    const cards = list.slice(0, itemNumber).map((item: BlogCardProps) => (
        <BadgeCard key={item.id} id={item.id} previewImage={item.previewImage} title={item.title} description={item.description} country={item.country} updatedAt={item.updatedAt} slug={item.slug} />
    ));

    return (
        <Stack align="center">
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">{cards}</SimpleGrid>
            {itemNumber < list.length && (
                <Button mt={50} onClick={onShowMore}>See more</Button>
            )}
        </Stack>
    )
}
