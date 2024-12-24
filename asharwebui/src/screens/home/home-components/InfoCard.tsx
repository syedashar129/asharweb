import { IconColorSwatch } from '@tabler/icons-react';
import { Paper, Text, ThemeIcon } from '@mantine/core';
import classes from '../../../styles/home/InfoCard.module.css';

interface cardInfo {
    cardTitle:string,
    cardDescription:string
}


export function InfoCard({cardTitle, cardDescription}: cardInfo) {
    return (
        <Paper withBorder radius="md" className={classes.card}>
            <ThemeIcon
                size="xl"
                radius="md"
                variant="gradient"
                gradient={{ deg: 0, from: 'pink', to: 'orange' }}
            >
                <IconColorSwatch size={28} stroke={1.5} />
            </ThemeIcon>
            <Text size="xl" fw={500} mt="md">
                {cardTitle}
            </Text>
            <Text size="sm" mt="sm" c="dimmed">
                {cardDescription}
            </Text>
        </Paper>
    );
}