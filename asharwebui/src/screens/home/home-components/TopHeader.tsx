import { IconChevronDown } from '@tabler/icons-react';
import {Burger, Center, Container, Group, Menu, Title} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../../../styles/home/TopHeader.module.css';
import {Link} from "react-router-dom";
import { ThemeToggle } from '../../../components/ThemeToggle';
import GithubLogo from '../../../components/GithubLogo';
import LinkedinLogo from '../../../components/LinkedinLogo';


const links = [
    { link: '/', label: 'Home' },
    { link: '/projects', label: 'Projects' },
    { link: '/blog', label: 'Blog' },
    {
        label: 'About Me',
        links: [
            { link: '/whoami', label: 'Who am I?', type:''},
            { link: '/resume.pdf', label: 'Download Resume', type:'download'},
        ],
    },
];

export function TopHeader() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            // each item here is the subtitles
            <Menu.Item key={item.link}>
                {item.type === 'download' ? 
                    <a href={item.link}download='Syed_Ashar_Resume.pdf' className={classes.link}>{item.label}</a>
                     
                    :

                    <Link to={item.link} key={item.label} className={classes.link}>
                        {item.label}
                    </Link>
                }
            </Menu.Item>
        ));

        // this is here to trigger dropwdown effect on items which are multi-layered
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