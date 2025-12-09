import { Center, Text, Title, Stack, Box } from '@mantine/core';
import { IconSparkles } from '@tabler/icons-react';

export default function HelloWorld() {
  return (
    <Box
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#08090A', // Very dark background
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(120, 119, 198, 0.1) 0%, transparent 40%)',
        color: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        style={{
          position: 'relative',
          padding: '60px 80px',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.5), 0 20px 40px -10px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(20px)',
          overflow: 'hidden',
        }}
      >
        {/* Top shine effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
          }}
        />

        <Stack align="center" gap="lg">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              borderRadius: '100px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.05)',
              marginBottom: '8px',
            }}
          >
            <IconSparkles size={14} color="#93c5fd" />
            <Text size="xs" fw={600} style={{ letterSpacing: '0.5px', color: '#93c5fd' }} tt="uppercase">
              New Experience
            </Text>
          </div>

          <Title
            order={1}
            style={{
              fontSize: '56px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              textAlign: 'center',
              background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))',
            }}
          >
            Hello World
          </Title>

          <Text
            size="lg"
            c="dimmed"
            ta="center"
            maw={400}
            style={{ fontWeight: 400, lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.6)' }}
          >
            Experience the precision of Linear-style design. 
            Clean lines, subtle gradients, and perfect contrast.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}

