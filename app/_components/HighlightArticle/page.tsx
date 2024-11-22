import { Button, Group, Image, Text, Title } from '@mantine/core';
import classes from './HighlightArticle.module.css';
import { BlogCardProps } from '@/types';

export function HighlightArticle({data}: {data: BlogCardProps}) {
    const {title, highlight, description, previewImage} = data;
    return (
        <div className={classes.inner}>
            <div className={classes.content}>
                <Title className={classes.title}>{title}
                    <span className={classes.highlight}>{highlight}</span> <br />
                </Title>
                <Text c="dimmed" mt="md">{description}</Text>
                <Group mt={30}>
                    <Button radius="xl" size="md" className={classes.control}>
                        Read more
                    </Button>
                </Group>                
            </div>
            <Image src={previewImage} className={classes.image} alt='' />
        </div>
    )
}