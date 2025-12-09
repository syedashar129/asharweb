import { AspectRatio, Card, Container, Image, SimpleGrid, Text } from '@mantine/core';
import classes from '../../styles/blog/HomeBlogCard.module.css';

const blogData = [
    {
        title: 'UTD Bachelors CS Blog',
        description: 'My journey through the Computer Science program at the University of Texas at Dallas. Sharing experiences, coursework, projects, and insights from my undergraduate studies.',
        image:
            'https://play-lh.googleusercontent.com/RsB_VJH7T35Kk7YSHHG-snvEDYLyyajgWzkXsa6BHRL5dghwydIds8DG9tr8CdofyIk',
        date: '2020-2023',
        category: 'Education',
    },
    {
        title: 'UT Austin Masters CS Blog',
        description: 'Exploring advanced computer science topics during my Master\'s program at the University of Texas at Austin. Documenting research, coursework, and academic experiences.',
        image:
            'https://yt3.googleusercontent.com/ytc/AIdro_kc5vR0K17o85Cr-KT7zRincym_SDnnmtDvqDavIR7pBT8=s900-c-k-c0x00ffffff-no-rj',
        date: '2024-2025',
        category: 'Education',
    },
    {
        title: 'Software Engineer Blog',
        description: 'Insights, tips, and experiences from my career as a Software Engineer. Covering technologies, best practices, challenges, and lessons learned in the industry.',
        image:
            'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
        date: 'Ongoing',
        category: 'Career',
    },
];

export function HomeBlogCard() {
    const cards = blogData.map((article) => (
        <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={article.image} />
            </AspectRatio>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
                {article.category} • {article.date}
            </Text>
            <Text className={classes.title} mt={5}>
                {article.title}
            </Text>
            <Text c="dimmed" size="sm" mt="xs">
                {article.description}
            </Text>
        </Card>
    ));

    return (
        <Container py="xl">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>{cards}</SimpleGrid>
        </Container>
    );
}