import { IconCertificate, IconDeviceLaptop } from '@tabler/icons-react';
import { Paper, Text, ThemeIcon } from '@mantine/core';
import classes from '../../../styles/home/InfoCard.module.css';

interface cardInfo {
    cardTitle: string,
    cardDescription: string,
    iconName: string
}

export function InfoCard({ cardTitle, cardDescription, iconName }: cardInfo) {
    // map of icon components
    const iconMap: Record<string, React.ReactNode> = {
        laptop: <IconDeviceLaptop size={28} stroke={1.5} />,
        certificate: <IconCertificate size={28} stroke={1.5} />
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--x', `${x}px`);
        e.currentTarget.style.setProperty('--y', `${y}px`);
    };

    return (
        <Paper 
            withBorder 
            radius="xl" 
            className={classes.card}
            onMouseMove={handleMouseMove}
        >
            <ThemeIcon
                size="xl"
                radius="xl"
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