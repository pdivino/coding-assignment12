import { Button } from './Button';

// Tells Storybook where to display the component
// and which properties should appear in the Controls panel.
const buttonStory = {
  title: 'UI Garden/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
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

export default buttonStory;

// Shows the normal button state in Storybook.
export const Default = {
  args: {
    label: 'Click me',
    backgroundColor: '#2563eb',
    disabled: false,
  },
};

// Shows the required disabled state in Storybook.
export const Disabled = {
  args: {
    label: 'Unavailable',
    backgroundColor: '#2563eb',
    disabled: true,
  },
};