import React from 'react';
import { ActionIcon, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';

const LinkedinLogo: React.FC = () => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="default"
      size="xl"
      style={{ backgroundColor: isDark ? theme.colors.dark[6] : '#fff' }}
      component="a"
      href="https://www.linkedin.com/in/syed-ashar"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconBrandLinkedin size={20} color="var(--mantine-color-blue-filled)" />
    </ActionIcon>
  );
};

export default LinkedinLogo;
