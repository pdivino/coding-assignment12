import { TableCell } from './TableCell';
import type { TableCellProps } from './TableCell.types';

// Places the TableCell inside valid table elements.
function renderTableCell(args: TableCellProps) {
  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          <TableCell {...args} />
        </tr>
      </tbody>
    </table>
  );
}

// Configures the component and its Storybook Controls.
const tableCellStory = {
  title: 'UI Garden/TableCell',
  component: TableCell,
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

export default tableCellStory;

// Shows the normal TableCell state.
export const Default = {
  args: {
    content: 'Complete',
    backgroundColor: '#ffffff',
    disabled: false,
  },
  render: renderTableCell,
};

// Shows the required disabled state.
export const Disabled = {
  args: {
    content: 'Unavailable',
    backgroundColor: '#ffffff',
    disabled: true,
  },
  render: renderTableCell,
};