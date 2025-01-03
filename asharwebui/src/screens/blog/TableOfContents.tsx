import { useState } from 'react';
import { IconListSearch } from '@tabler/icons-react';
import cx from 'clsx';
import { Box, Group, Text } from '@mantine/core';
import classes from '../../styles/blog/TableOfContents.module.css'

const links = [
    { label: 'Usage', link: '#usage', order: 1 },
    { label: 'Position and placement', link: '#position', order: 1 },
    { label: 'With other overlays', link: '#overlays', order: 1 },
    { label: 'Manage focus', link: '#focus', order: 1 },
    { label: 'Examples', link: '#1', order: 1 },
    { label: 'Show on focus', link: '#2', order: 2 },
    { label: 'Show on hover', link: '#3', order: 2 },
    { label: 'With form', link: '#4', order: 2 },
];

export function TableOfContents() {
    const [active, setActive] = useState(2);

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
                <Text>Table of contents</Text>
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