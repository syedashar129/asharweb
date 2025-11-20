import { Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from '../../../styles/home/Hobbies.module.css';
import { IconBallAmericanFootball, IconMovie, IconRun, IconShoppingCart } from "@tabler/icons-react";

const hobbies = [
    {
        icon: <IconBallAmericanFootball size={30} />,
        title: 'Sports',
        description: 'Grown and raised in Houston! Go Texans, Rockets, and Astros!',
    },
    {
        icon: <IconMovie size={30} />,
        title: 'Shows',
        description: 'Favorite shows include Ozark,Breaking Bad,The Office,and Silicon Valley',
    },
    {
        icon: <IconShoppingCart size={30} />,
        title: 'Shopping',
        description: 'It is my guilty pleasure, but I often spend time shopping  for things I dont need :)',
    },
    {
        icon: <IconRun size={30} />,
        title: 'Others',
        description: 'Strong liking to pickleball and other paddle sports, Love running/walking and trying to be consistent in weight lifting.',
    },
];

export function Hobbies() {
    const items = hobbies.map((item) => (
        <div className={classes.item} key={item.title}>
            <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="xl">
                {item.icon}
            </ThemeIcon>

            <div>
                <Text fw={700} fz="lg" className={classes.itemTitle}>
                    {item.title}
                </Text>
                <Text c="dimmed">{item.description}</Text>
            </div>
        </div>
    ));

    return (
        <Container size={700} className={classes.wrapper}>
            <Text className={classes.supTitle}>Syed's Hobbies</Text>
            <br />

            <Title className={classes.title} order={2}>
                Beyond Code - <span className={classes.highlight}>What do I do?</span>
            </Title>

            <Container size={660} p={0}>
                <Text c="dimmed" className={classes.description}>
                    I’m passionate about coding and tech, but I also love exploring other interests.
                    I’m a big football and basketball fan, and watching shows, movies, or anime is my go-to way to relax.
                    Lately, I’ve been diving into learning more about stocks and personal finance—it’s been exciting to pick up new skills in that area!
                </Text>
            </Container>

            <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
                {items}
            </SimpleGrid>
        </Container>
    );
}