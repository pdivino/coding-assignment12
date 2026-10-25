import { Dropdown } from './Dropdown';

// Choices that will appear in the Storybook Dropdown.
const countryOptions = [
  { label: 'Choose a country', value: '' },
  { label: 'Canada', value: 'canada' },
  { label: 'United States', value: 'united-states' },
  { label: 'Mexico', value: 'mexico' },
];

// Tells Storybook where to display the Dropdown
// and which properties should appear in Controls.
const dropdownStory = {
  title: 'UI Garden/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    options: {
      control: 'object',
    },
    backgroundColor: {
      control: 'color',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default dropdownStory;

// Shows the normal Dropdown state.
export const Default = {
  args: {
    options: countryOptions,
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Shows the required disabled Dropdown state.
export const Disabled = {
  args: {
    options: countryOptions,
    backgroundColor: '#ffffff',
    disabled: true,
  },
};