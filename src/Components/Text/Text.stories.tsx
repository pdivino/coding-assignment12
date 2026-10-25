import { Text } from './Text';

// Tells Storybook where to display the Text component
// and which properties should appear in Controls.
const textStory = {
  title: 'UI Garden/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: {
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

export default textStory;

// Shows the normal Text state.
export const Default = {
  args: {
    content: 'This is a reusable text component.',
    backgroundColor: '#f3f4f6',
    disabled: false,
  },
};

// Shows the required disabled Text state.
export const Disabled = {
  args: {
    content: 'This text is unavailable.',
    backgroundColor: '#f3f4f6',
    disabled: true,
  },
};