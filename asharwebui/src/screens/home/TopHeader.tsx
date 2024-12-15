import { IconChevronDown } from '@tabler/icons-react';
import {Burger, Center, Container, Group, Menu, Title} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '../../styles/home/TopHeader.module.css';


const links = [
    { link: '/about', label: 'Home' },
    { link: '/about', label: 'Projects' },
    { link: '/pricing', label: 'Blog' },
    {
        link: '#2',
        label: 'About Me',
        links: [
            { link: '/faq', label: 'Who am I?' },
            { link: '/forums', label: 'Download Resume' },
        ],
    },
];

export function TopHeader() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size={14} stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    return (
        <header className={classes.header}>
            <Container size="md">
                <div className={classes.inner}>
                    {/*<MantineLogo size={28} />*/}
                    <Title order={3}>Syed Ashar</Title>
                    <Group gap={5} visibleFrom="sm">
                        {items}
                    </Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                </div>
            </Container>
        </header>
    );
}