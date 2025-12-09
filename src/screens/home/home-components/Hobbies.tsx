import { Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from '../../../styles/home/Hobbies.module.css';
import { IconBallAmericanFootball, IconMovie, IconRun, IconShoppingCart } from "@tabler/icons-react";

const hobbies = [
    {
        icon: <IconBallAmericanFootball size={30} />,
        title: 'Sports',
        description: 'Born and raised in Houston! Proud supporter of the Texans, Rockets, and Astros.',
    },
    {
        icon: <IconMovie size={30} />,
        title: 'Entertainment',
        description: 'Enjoy watching shows like Ozark, Breaking Bad, The Office, and Silicon Valley in my free time.',
    },
    {
        icon: <IconShoppingCart size={30} />,
        title: 'Shopping',
        description: 'I enjoy exploring new products and staying updated with the latest tech and fashion trends.',
    },
    {
        icon: <IconRun size={30} />,
        title: 'Fitness',
        description: 'Active in pickleball and other paddle sports. I maintain a regular routine of running, walking, and weightlifting.',
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
            <Title mb="xl" className="gradient-text" size="h1" fw={900} ta="center">Hobbies</Title>
            
            <Container size={660} p={0}>
                <Text c="dimmed" className={classes.description} ta="center">
                    While I'm passionate about software engineering and technology, I also value maintaining a well-rounded lifestyle. 
                    I'm an avid sports fan, enjoy quality entertainment, and stay active through various fitness activities. 
                    I'm also continuously learning about personal finance and investment strategies to expand my knowledge beyond technology.
                </Text>
            </Container>

            <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
                {items}
            </SimpleGrid>
        </Container>
    );
}