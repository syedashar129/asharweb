import { useState } from 'react';
import { IconListSearch } from '@tabler/icons-react';
import cx from 'clsx';
import { Box, Group, Text } from '@mantine/core';
import classes from '../../styles/blog/TableOfContents.module.css'

const links = [
    { label: 'UTD Bachelors CS Blog', link: '#utd-bachelors', order: 1 },
    { label: 'UT Austin Masters CS Blog', link: '#ut-austin-masters', order: 1 },
    { label: 'Software Engineer Blog', link: '#software-engineer', order: 1 },
];

export function TableOfContents() {
    const [active, setActive] = useState(0);

    const items = links.map((item, index) => (
        <Box<'a'>
            component="a"
            href={item.link}
            onClick={(event) => {
                event.preventDefault();
                setActive(index);
            }}
            key={item.label}
            className={cx(classes.link, { [classes.linkActive]: active === index })}
            style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
        >
            {item.label}
        </Box>
    ));

    return (
        <div className={classes.root}>
            <Group mb="md">
                <IconListSearch size={18} stroke={1.5} />
                <Text>Blog Categories</Text>
            </Group>
            <div className={classes.links}>
                <div
                    className={classes.indicator}
                    style={{
                        transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
                    }}
                />
                {items}
            </div>
        </div>
    );
}