import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, ActionIcon, CardSection } from '@mantine/core';
import classes from './BadgeCard.module.css';
import { BlogCardProps } from '@/types';
import { formatDate } from '@/untils/strapi.utils';
import Link from 'next/link';
import ButtonLink from '../ButtonLink/ButtonLink';

export function BadgeCard({ id, previewImage, title, description, badges, updatedAt, slug }: BlogCardProps) {
    badges = [
        { emoji: '☀️', label: 'Sunny weather' },
        { emoji: '🦓', label: 'Onsite zoo' },
        { emoji: '🌊', label: 'Sea' },
        { emoji: '🌲', label: 'Nature' },
        { emoji: '🤽', label: 'Water sports' },
    ];

    const features = badges.map((badge) => (
        <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
            {badge.label}
        </Badge>
    ));

    return (
        <Card id={id} withBorder radius="md" p="md" className={classes.card}>
            <CardSection>
                <Image src={previewImage} alt={title} height={180} />
            </CardSection>
            <CardSection className={classes.section} mt="md">
                <Group justify="apart">
                    <Text fz="lg" fw={500}>
                        {title}
                    </Text>
                </Group>
                <Text size="sm">{formatDate(updatedAt)}</Text>
                <Text fz="sm" mt="xs">
                    {description}
                </Text>
            </CardSection>
            <CardSection className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Perfect for you, if you enjoy
                </Text>
                <Group gap={7} mt={5}>
                    {features}
                </Group>
            </CardSection>

            <Group mt="xs">
                <ButtonLink name='Show details' size='sm' href={`/blog/${slug}`} style='1'></ButtonLink>
                <ActionIcon variant="default" radius="md" size={36}>
                    <IconHeart className={classes.like} stroke={1.5} />
                </ActionIcon>
            </Group>
        </Card>
    );
}