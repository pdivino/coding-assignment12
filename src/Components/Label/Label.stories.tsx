import { Label } from './Label';

// Tells Storybook where to display the Label
// and which properties should appear in Controls.
const labelStory = {
  title: 'UI Garden/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
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

export default labelStory;

// Shows the normal Label state.
export const Default = {
  args: {
    text: 'Email address',
    backgroundColor: '#dbeafe',
    disabled: false,
  },
};

// Shows the required disabled Label state.
export const Disabled = {
  args: {
    text: 'Email address unavailable',
    backgroundColor: '#dbeafe',
    disabled: true,
  },
};