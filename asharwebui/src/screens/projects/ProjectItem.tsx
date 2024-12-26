import { IconHeart } from '@tabler/icons-react';
import { ActionIcon, Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import classes from '../../styles/projects/ProjectItem.module.css';

interface projectItems {
    projTitle: string,
    type: string,
    projDescription: string,
    badges: {emoji: string, label: string}[],
    imgSrc: string,
    githubLink: string
}

// const mockdata = {
//     image: {imageSrc},
//     title: 'Verudela Beach',
//     country: 'Croatia',
//     description:
//         'Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.',
//     badges: [
//         { emoji: '☀️', label: 'Sunny weather' },
//         { emoji: '🦓', label: 'Onsite zoo' },
//         { emoji: '🌊', label: 'Sea' },
//         { emoji: '🌲', label: 'Nature' },
//         { emoji: '🤽', label: 'Water sports' },
//     ],
// };

export function ProjectItem({projTitle, type, projDescription, badges, imgSrc, githubLink}: projectItems) {
    const features = badges.map((badge) => (
        <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
            {badge.label}
        </Badge>
    ));

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image src={imgSrc} alt={projTitle} height={180} />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group justify="apart">
                    <Text fz="lg" fw={500}>
                        {projTitle}
                    </Text>
                    <Badge size="sm" variant="light">
                        {type}
                    </Badge>
                </Group>
                <Text fz="sm" mt="xs">
                    {projDescription}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                {/*<Text mt="md" className={classes.label} c="dimmed">*/}
                {/*    Perfect for you, if you enjoy*/}
                {/*</Text>*/}
                <Group gap={7} mt={5}>
                    {features}
                </Group>
            </Card.Section>

            <Group mt="xs">
                <a href={githubLink} target={'_blank'}>
                <Button radius="md" style={{ flex: 1 }}>
                    Show details
                </Button>
                </a>
                <ActionIcon variant="default" radius="md" size={36}>
                    <IconHeart className={classes.like} stroke={1.5} />
                </ActionIcon>
            </Group>
        </Card>
    );
}