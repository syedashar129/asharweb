import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import { ActionIcon, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import classes from '../styles/home/ThemeToggle.module.css';

export function ThemeToggle() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <Group justify="center">
            <ActionIcon
                onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                variant="default"
                size="xl"
                aria-label="Toggle color scheme"
            >
                {computedColorScheme === 'light' ? <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
                                                 : <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
                }
                
                
            </ActionIcon>
        </Group>
    );
}