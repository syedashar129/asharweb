import { Button, Group, Stack, Text, Title, Anchor } from '@mantine/core';
import { IconMail, IconBrandLinkedin } from '@tabler/icons-react';

export function ContactInfo() {
  return (
    <Stack gap="xl" align="center" mt="xl">
      <Title
        order={2}
        size="h1"
        style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
        fw={900}
        ta="center"
      >
        Get in touch
      </Title>

      <Text size="lg" c="dimmed" ta="center" maw={600}>
        Feel free to reach out to me via email or LinkedIn. I'd love to hear from you!
      </Text>

      <Group justify="center" gap="md" mt="md">
        <Button
          component="a"
          href="mailto:syedashar25@gmail.com"
          leftSection={<IconMail size={18} />}
          size="lg"
          variant="filled"
        >
          Email Me
        </Button>

        <Button
          component="a"
          href="https://www.linkedin.com/in/syed-ashar"
          target="_blank"
          rel="noopener noreferrer"
          leftSection={<IconBrandLinkedin size={18} />}
          size="lg"
          variant="outline"
        >
          LinkedIn
        </Button>
      </Group>

      <Stack gap="xs" align="center" mt="xl">
        <Text size="sm" c="dimmed" ta="center">
          <Anchor href="mailto:syedashar25@gmail.com" underline="hover">
            syedashar25@gmail.com
          </Anchor>
        </Text>
        <Text size="sm" c="dimmed" ta="center">
          <Anchor 
            href="https://www.linkedin.com/in/syed-ashar" 
            target="_blank" 
            rel="noopener noreferrer"
            underline="hover"
          >
            linkedin.com/in/syed-ashar
          </Anchor>
        </Text>
      </Stack>
    </Stack>
  );
}