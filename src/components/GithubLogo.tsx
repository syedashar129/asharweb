import React from 'react';
import { ActionIcon, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

const GithubLogo: React.FC = () => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="default"
      size="xl"
      style={{ backgroundColor: isDark ? theme.colors.dark[6] : '#fff' }}
      component="a"
      href="https://github.com/syedashar129"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconBrandGithub size={20} />
    </ActionIcon>
  );
};

export default GithubLogo;
