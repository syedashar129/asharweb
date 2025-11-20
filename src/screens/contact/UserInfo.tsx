import { IconAt } from '@tabler/icons-react';
import { Avatar, Group, Text } from '@mantine/core';
import classes from '../../styles/aboutme/UserInfo.module.css';

interface userProps {
    title: string,
    name: string,
    email: string
}

export function UserInfo({title, name, email}:userProps) {
    return (
        <div>
            <Group wrap="nowrap">
                <Avatar
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                    size={94}
                    radius="md"
                />
                <div>
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                        {title}
                    </Text>

                    <Text fz="lg" fw={500} className={classes.name}>
                        {name}
                    </Text>

                    <Group wrap="nowrap" gap={10} mt={3}>
                        <IconAt stroke={1.5} size={16} className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            {email}
                        </Text>
                    </Group>

                    {/*<Group wrap="nowrap" gap={10} mt={5}>*/}
                    {/*    <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />*/}
                    {/*    <Text fz="xs" c="dimmed">*/}
                    {/*        +11 (876) 890 56 23*/}
                    {/*    </Text>*/}
                    {/*</Group>*/}
                </div>
            </Group>
        </div>
    );
}