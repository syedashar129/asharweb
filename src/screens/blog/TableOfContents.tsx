import { Badge, Group, Text } from '@mantine/core';
import { IconBook } from '@tabler/icons-react';

const categories = [
    { label: 'UTD Bachelors CS', link: '#utd-bachelors' },
    { label: 'UT Austin Masters CS', link: '#ut-austin-masters' },
    { label: 'Software Engineer', link: '#software-engineer' },
];

export function TableOfContents() {
    const items = categories.map((category) => (
        <Badge
            key={category.label}
            component="a"
            href={category.link}
            onClick={(e) => {
                e.preventDefault();
            }}
            variant="light"
            size="lg"
            style={{ cursor: 'pointer' }}
        >
            {category.label}
        </Badge>
    ));

    return (
        <Group gap="md" align="center" mb="md">
            <IconBook size={20} stroke={1.5} />
            <Text size="sm" fw={500} c="dimmed">Categories:</Text>
            {items}
        </Group>
    );
}