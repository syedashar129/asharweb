import { IconBrandGithub, IconBrandGithubFilled, IconChevronDown, IconSun } from '@tabler/icons-react';
import {ActionIcon, Burger, Center, Container, Group, Menu, Title} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '../../../styles/home/TopHeader.module.css';
import {Link} from "react-router-dom";
import { ThemeToggle } from '../../../components/ThemeToggle';
import themeClasses from '../../../styles/home/ThemeToggle.module.css';
import cx from 'clsx';
import GithubLogo from '../../../components/GithubLogo';
import LinkedinLogo from '../../../components/LinkedinLogo';


const links = [
    { link: '/', label: 'Home' },
    { link: '/projects', label: 'Projects' },
    { link: '/blog', label: 'Blog' },
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
            <Link
                key={link.label}
                to={link.link}
                className={classes.link}
            >
                {link.label}
            </Link>
        );
    });

    return (
        <header className={classes.header}>
            <Container size="md">

                {/* this is the top header */}
                <div className={classes.inner}>
                    {/*<MantineLogo size={28} />*/}
                    <Title order={3}>Syed Ashar</Title>
                    <Group gap={5} visibleFrom="sm">
                        {items}
                    </Group>
                    
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                    
                    <Group gap={5} visibleFrom="sm">
                        <ThemeToggle/>
                        <GithubLogo/>
                        <LinkedinLogo/>
                    </Group>
                
                </div>
                    
            </Container>
        </header>
    );
}