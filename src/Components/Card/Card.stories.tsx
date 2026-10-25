import { Card } from './Card';

// Tells Storybook where to display the Card
// and which properties should appear in Controls.
const cardStory = {
  title: 'UI Garden/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
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

export default cardStory;

// Shows the normal Card state.
export const Default = {
  args: {
    title: 'Component Library',
    description:
      'A collection of reusable React components.',
    imageUrl:
      '/ui-garden.svg',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Shows the required disabled Card state.
export const Disabled = {
  args: {
    title: 'Card unavailable',
    description:
      'This Card is currently disabled.',
    imageUrl:
      '/ui-garden.svg',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};