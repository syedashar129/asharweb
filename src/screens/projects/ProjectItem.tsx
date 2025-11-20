import { IconHeart } from '@tabler/icons-react';
import { ActionIcon, Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import classes from '../../styles/projects/ProjectItem.module.css';

interface projectItems {
    projTitle: string,
    type: string,
    projDescription: string,
    badges: { emoji: string, label: string }[],
    imgSrc: string,
    githubLink: string
}

export function ProjectItem({ projTitle, type, projDescription, badges, imgSrc, githubLink }: projectItems) {
    const features = badges.map((badge) => (
        <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
            {badge.label}
        </Badge>
    ));

    return (
        <Card withBorder radius="xl" p="md" className={classes.card}>
            <Card.Section>
                <Image src={imgSrc} alt={projTitle} height={180} />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group justify="space-between">
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
                <Group gap={7} mt={5}>
                    {features}
                </Group>
            </Card.Section>

            <Group mt="xs">
                {githubLink ? (
                    <a href={githubLink} target={'_blank'} style={{ flex: 1 }}>
                        <Button radius="xl" fullWidth>
                            Show details
                        </Button>
                    </a>
                ) : (
                    <Button radius="xl" style={{ flex: 1 }} disabled>
                        No Link Available
                    </Button>
                )}
                <ActionIcon variant="default" radius="xl" size={36}>
                    <IconHeart className={classes.like} stroke={1.5} />
                </ActionIcon>
            </Group>
        </Card>
    );
}