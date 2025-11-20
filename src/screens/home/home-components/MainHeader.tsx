import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import { Link } from "react-router-dom";
import profileImg from '../../../assets/syed_ashar_grad_photo.jpg';
import classes from '../../../styles/home/MainHeader.module.css';

export function MainHeader() {
    return (
        <Container size="md">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        Hi I'm <span className={classes.highlight}>Syed Ashar</span> <br /> Software Engineer
                    </Title>
                    <Text c="dimmed" mt="md">
                        I am a full-time software engineer with over 2 years of experience. I am
                        passionate about web development and data, and I’m always eager to take on new challenges and contribute
                        to meaningful projects.
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconCheck size={12} stroke={1.5} />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <b>Software Engineer</b> – JPMorganChase &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </List.Item>
                        <List.Item>
                            <b>Education</b> – Masters + Bachelors in CS &nbsp;&nbsp;
                        </List.Item>
                        <List.Item>
                            <b>Skills</b> – Springboot/React/Java/JS/Python
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Link to={'/projects'}>
                            <Button radius="xl" size="md" className={classes.control}>Check My Projects</Button>
                        </Link>

                        <Link to={'/contact'}>
                            <Button variant="default" radius="xl" size="md" className={classes.control}>
                                Contact me
                            </Button>
                        </Link>
                    </Group>
                </div>
                <Image src={profileImg} className={classes.image} radius="50%" />
            </div>
        </Container>
    );
}