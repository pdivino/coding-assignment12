import { RadioButton } from './RadioButton';

// Tells Storybook where to display the RadioButton
// and which properties should appear in Controls.
const radioButtonStory = {
  title: 'UI Garden/RadioButton',
  component: RadioButton,
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
    defaultChecked: {
      control: 'boolean',
    },
  },
};

export default radioButtonStory;

// Shows the normal RadioButton state.
export const Default = {
  args: {
    label: 'Select this option',
    backgroundColor: '#f3f4f6',
    disabled: false,
    defaultChecked: false,
    name: 'storybook-radio',
  },
};

// Shows the required disabled RadioButton state.
export const Disabled = {
  args: {
    label: 'Option unavailable',
    backgroundColor: '#f3f4f6',
    disabled: true,
    defaultChecked: false,
    name: 'storybook-radio',
  },
};