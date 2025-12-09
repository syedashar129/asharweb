import { IconChevronDown } from '@tabler/icons-react';
import { Burger, Center, Container, Group, Menu, Title, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../../../styles/home/TopHeader.module.css';
import { ThemeToggle } from '../../../components/ThemeToggle';
import GithubLogo from '../../../components/GithubLogo';
import LinkedinLogo from '../../../components/LinkedinLogo';


const links = [
    { link: '#home', label: 'Home' },
    { link: '#projects', label: 'Projects' },
    { link: '#blog', label: 'Blog' },
    {
        label: 'About Me',
        links: [
            { link: '#contact', label: 'Contact Me', type: '' },
            { link: '/resume.pdf', label: 'Download Resume', type: 'download' },
        ],
    },
];

const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export function TopHeader() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            // each item here is the subtitles
            <Menu.Item key={item.link}>
                {item.type === 'download' ?
                    <a href={item.link} download='Syed_Ashar_Resume.pdf' className={classes.link}>{item.label}</a>

                    :

                    <a
                        href={item.link}
                        className={classes.link}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.link);
                        }}
                    >
                        {item.label}
                    </a>
                }
            </Menu.Item>
        ));

        // this is here to trigger dropwdown effect on items which are multi-layered
        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                            href={link.link ?? '#'}
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
                href={link.link ?? '#'}
                className={classes.link}
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.link ?? '#home');
                }}
            >
                {link.label}
            </a>
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
                        <ThemeToggle />
                        <GithubLogo />
                        <LinkedinLogo />
                    </Group>

                    <Drawer
                        opened={opened}
                        onClose={toggle}
                        size="100%"
                        padding="md"
                        title="Navigation"
                        hiddenFrom="sm"
                        zIndex={1000000}
                    >
                        <Stack gap="md">
                            {links.map((link) => {
                                if (link.links) {
                                    return link.links.map((subLink) => (
                                        <a
                                            key={subLink.label}
                                            href={subLink.link ?? '#'}
                                            className={classes.link}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (subLink.type !== 'download') {
                                                    scrollToSection(subLink.link ?? '#home');
                                                }
                                                toggle();
                                            }}
                                        >
                                            {subLink.label}
                                        </a>
                                    ));
                                }
                                return (
                                    <a
                                        key={link.label}
                                        href={link.link}
                                        className={classes.link}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.link ?? '#home');
                                            toggle();
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                );
                            })}
                            <Group justify="center" mt="xl">
                                <ThemeToggle />
                                <GithubLogo />
                                <LinkedinLogo />
                            </Group>
                        </Stack>
                    </Drawer>

                </div>

            </Container>
        </header>
    );
}