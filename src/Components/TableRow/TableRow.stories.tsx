import { TableRow } from './TableRow';
import type { TableRowProps } from './TableRow.types';

// Places the TableRow inside valid table elements.
function renderTableRow(args: TableRowProps) {
  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <tbody>
        <TableRow {...args} />
      </tbody>
    </table>
  );
}

// Tells Storybook where to display the component
// and which properties should appear in Controls.
const tableRowStory = {
  title: 'UI Garden/TableRow',
  component: TableRow,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    cells: {
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

export default tableRowStory;

// Shows the normal TableRow state.
export const Default = {
  args: {
    cells: ['Button', 'Input', 'Complete'],
    backgroundColor: '#ffffff',
    disabled: false,
  },
  render: renderTableRow,
};

// Shows the required disabled state.
export const Disabled = {
  args: {
    cells: ['Button', 'Input', 'Unavailable'],
    backgroundColor: '#ffffff',
    disabled: true,
  },
  render: renderTableRow,
};