import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
    ActionIcon,
    Avatar,
    Badge,
    Card,
    Group,
    Image,
    Text,
    useMantineTheme,
} from '@mantine/core';
import classes from '../../styles/projects/ProjectItem.module.css';

export function ProjectItem({
    tags, title, githubLink, image, desciption
                            }
) {
    const theme = useMantineTheme();

    return (
        <Card withBorder padding="lg" radius="md" className={classes.card}>
            <Card.Section mb="sm">
                <Image
                    src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                    alt="Top 50 underrated plants for house decoration"
                    height={180}
                />
            </Card.Section>

            <Badge w="fit-content" variant="light">
                decorations
            </Badge>

            <Text fw={700} className={classes.title} mt="xs">
                Top 50 underrated plants for house decoration
            </Text>

            <Group mt="lg">
                <Avatar
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
                    radius="sm"
                />
                <div>
                    <Text fw={700}>Syed Ashar</Text>
                    <Text fz="xs" c="dimmed">
                        posted 34 minutes ago
                    </Text>
                </div>
            </Group>


        </Card>
    );
}