import { Paper, Text, Title } from '@mantine/core';
import classes from '../../../styles/home/ItemCard.module.css';


// props
interface ItemCardProps {
    category: string;
    title: string,
    image: string,
    years: string
}
export function ItemCard({category, title, image, years} : ItemCardProps) {
    return (
        <Paper shadow="md" p="xl" radius="md" className={classes.card} style={{backgroundImage: `url(${image}`}}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Text className={classes.category} size="xs">
                    {category} <br/> {years}
                </Text>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
        </Paper>
    );
}