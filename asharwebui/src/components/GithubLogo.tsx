import React from 'react';
import { ActionIcon, useMantineTheme } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

const GithubLogo: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <ActionIcon
      variant="default" 
      size="xl" 
      sx={{
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#fff',
        '&:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
      }} // this is for the circle background in the github logo
      component="a"
      href="https://github.com/syedashar129" 
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconBrandGithub
        size={20} 
      />
    </ActionIcon>
  );
};

export default GithubLogo;
