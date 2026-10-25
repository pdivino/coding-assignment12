import { Table } from './Table';

// Tells Storybook where to display the Table
// and which properties should appear in Controls.
const tableStory = {
  title: 'UI Garden/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    headers: {
      control: 'object',
    },
    rows: {
      control: 'object',
    },
    footerText: {
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

export default tableStory;

// Shows the normal Table state.
export const Default = {
  args: {
    headers: ['Component', 'Type', 'Status'],
    rows: [
      ['Button', 'Input', 'Complete'],
      ['Label', 'Text', 'Complete'],
      ['Dropdown', 'Input', 'Complete'],
    ],
    footerText: '3 components shown',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Shows the required disabled Table state.
export const Disabled = {
  args: {
    headers: ['Component', 'Type', 'Status'],
    rows: [
      ['Button', 'Input', 'Unavailable'],
      ['Label', 'Text', 'Unavailable'],
    ],
    footerText: 'Table unavailable',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};