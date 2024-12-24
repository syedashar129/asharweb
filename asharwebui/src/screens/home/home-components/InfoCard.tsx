import {IconCertificate, IconColorSwatch, IconDeviceLaptop} from '@tabler/icons-react';
import { Paper, Text, ThemeIcon } from '@mantine/core';
import classes from '../../../styles/home/InfoCard.module.css';

interface cardInfo {
    cardTitle:string,
    cardDescription:string,
    iconName:string
}



export function InfoCard({cardTitle, cardDescription, iconName}: cardInfo) {
    // map of icon components
    const iconMap = {
        laptop: <IconDeviceLaptop size={28} stroke={1.5} />,
        certificate: <IconCertificate size={28} stroke={1.5} />
    }

    return (
        <Paper withBorder radius="md" className={classes.card}>
            <ThemeIcon
                size="xl"
                radius="md"
                variant="gradient"
                gradient={{ deg: 0, from: 'pink', to: 'orange' }}
            >
                {iconMap[iconName]}
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