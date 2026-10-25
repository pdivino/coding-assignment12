import { Img } from './Img';

// Tells Storybook where to display the Img component
// and which properties should appear in Controls.
const imgStory = {
  title: 'UI Garden/Img',
  component: Img,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: {
      control: 'text',
    },
    alt: {
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

export default imgStory;

// Shows the normal Img state.
export const Default = {
  args: {
    src: '/ui-garden.svg',
    alt: 'UI Garden placeholder',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Shows the required disabled Img state.
export const Disabled = {
  args: {
    src: '/ui-garden.svg',
    alt: 'Unavailable placeholder',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};