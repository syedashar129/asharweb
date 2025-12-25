import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import profileImg from '../../../assets/syed_ashar_grad_photo.jpg';
import classes from '../../../styles/home/MainHeader.module.css';

const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export function MainHeader() {
    return (
        <Container size="md" px={{ base: 'xs', sm: 'md', md: 'xl' }}>
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        Hello, I'm <span className={classes.highlight}>Syed Ashar</span> <br /> 
                        <span className={classes.subtitle}>Software Engineer</span>
                    </Title>
                    <Text c="dimmed" mt="md" size="lg" fw={400} lh={1.7} className={classes.description}>
                        Full-stack software engineer with 2+ years of experience building scalable enterprise applications. 
                        Passionate about crafting elegant solutions to complex problems and delivering high-quality software 
                        that drives business value.
                    </Text>

                    <List
                        mt={30}
                        spacing="md"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl" className={classes.checkmarkThemeIcon}>
                                <IconCheck size={12} stroke={1.5} className={classes.checkmarkIcon} />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <b>Software Engineer</b> at JPMorgan Chase
                        </List.Item>
                        <List.Item>
                            <b>Education:</b> Master's & Bachelor's in Computer Science
                        </List.Item>
                        <List.Item>
                            <b>Tech Stack:</b> Spring Boot, React, Java, JavaScript, Python, AWS, Terraform
                        </List.Item>
                    </List>

                    <Group mt={30} gap="md" className={classes.buttonGroup}>
                        <Button 
                            radius="xl" 
                            size="md" 
                            className={classes.control}
                            onClick={() => scrollToSection('#projects')}
                        >
                            <span className={classes.controlText}>View Projects</span>
                        </Button>

                        <Button 
                            variant="default" 
                            radius="xl" 
                            size="md" 
                            className={classes.control}
                            onClick={() => scrollToSection('#contact')}
                        >
                            <span className={classes.controlText}>Get In Touch</span>
                        </Button>
                    </Group>
                </div>
                <Image src={profileImg} className={classes.image} radius="50%" />
            </div>
        </Container>
    );
}