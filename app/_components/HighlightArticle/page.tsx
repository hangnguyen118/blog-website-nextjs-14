import { Button, Group, Image, Text, Title } from '@mantine/core';
import classes from './HighlightArticle.module.css';
type BlogCardProps = {
    image: string;
    title: string;
    description:
        string;
    highlight: string
};

export function HighlightArticle({ image, title, description, highlight}: BlogCardProps) {
    return (
        <div className={classes.inner}>
            <div className={classes.content}>
                <Title className={classes.title}>{title}
                    <span className={classes.highlight}>highlight</span> <br />
                </Title>
                <Text c="dimmed" mt="md">{description}</Text>
                <Group mt={30}>
                    <Button radius="xl" size="md" className={classes.control}>
                        Read more
                    </Button>
                </Group>                
            </div>
            <Image src={image} className={classes.image} alt='' />
        </div>
    )
}