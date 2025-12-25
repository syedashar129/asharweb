// Type declarations to extend Mantine List component with responsive spacing
import type { MantineSpacing } from '@mantine/core';

declare module '@mantine/core' {
  interface ListProps {
    spacing?: MantineSpacing | ResponsiveValue<MantineSpacing>;
  }
}

// Helper type for responsive values
type ResponsiveValue<T> = {
  base?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};

