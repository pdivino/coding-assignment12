import { TableFooter } from './TableFooter';
import type { TableFooterProps } from './TableFooter.types';

// Places the TableFooter inside a valid table.
function renderTableFooter(args: TableFooterProps) {
  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <TableFooter {...args} />
    </table>
  );
}

// Configures the component and its Storybook Controls.
const tableFooterStory = {
  title: 'UI Garden/TableFooter',
  component: TableFooter,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: {
      control: 'text',
    },
    columnSpan: {
      control: 'number',
    },
    backgroundColor: {
      control: 'color',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default tableFooterStory;

// Shows the normal TableFooter state.
export const Default = {
  args: {
    content: '3 components shown',
    columnSpan: 3,
    backgroundColor: '#dbeafe',
    disabled: false,
  },
  render: renderTableFooter,
};

// Shows the required disabled state.
export const Disabled = {
  args: {
    content: 'Footer unavailable',
    columnSpan: 3,
    backgroundColor: '#dbeafe',
    disabled: true,
  },
  render: renderTableFooter,
};