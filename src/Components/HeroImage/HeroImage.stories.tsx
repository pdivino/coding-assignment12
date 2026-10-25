import { HeroImage } from './HeroImage';

// Tells Storybook where to display the HeroImage
// and which properties should appear in Controls.
const heroImageStory = {
  title: 'UI Garden/HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    imageUrl: {
      control: 'text',
    },
    backgroundColor: {
      control: 'color',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default heroImageStory;

// Shows the normal HeroImage state.
export const Default = {
  args: {
    title: 'Welcome to UI Garden',
    subtitle: 'Reusable components built with React and Storybook.',
    imageUrl:
     '/ui-garden.svg',
    backgroundColor: '#2563eb',
    disabled: false,
  },
};

// Shows the required disabled HeroImage state.
export const Disabled = {
  args: {
    title: 'Hero unavailable',
    subtitle: 'This content is currently disabled.',
    imageUrl:
      '/ui-garden.svg',
    backgroundColor: '#2563eb',
    disabled: true,
  },
};