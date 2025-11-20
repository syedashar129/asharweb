import React from 'react';
import { ActionIcon, useMantineTheme } from '@mantine/core';
import {IconBrandLinkedin} from '@tabler/icons-react';

const LinkedinLogo: React.FC = () => {
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
      href="https://www.linkedin.com/in/syed-ashar" 
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconBrandLinkedin
        size={20} 
        color="var(--mantine-color-blue-filled"
      />
    </ActionIcon>
  );
};

export default LinkedinLogo;
