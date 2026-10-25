import { TableHeader } from './TableHeader';
import type { TableHeaderProps } from './TableHeader.types';

// Places the TableHeader inside a table because <thead>
// cannot be used by itself.
function renderTableHeader(args: TableHeaderProps) {
  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <TableHeader {...args} />
    </table>
  );
}

// Tells Storybook where to display the component
// and which properties should appear in Controls.
const tableHeaderStory = {
  title: 'UI Garden/TableHeader',
  component: TableHeader,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    headings: {
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

export default tableHeaderStory;

// Shows the normal TableHeader state.
export const Default = {
  args: {
    headings: ['Name', 'Role', 'Status'],
    backgroundColor: '#dbeafe',
    disabled: false,
  },
  render: renderTableHeader,
};

// Shows the required disabled state.
export const Disabled = {
  args: {
    headings: ['Name', 'Role', 'Status'],
    backgroundColor: '#dbeafe',
    disabled: true,
  },
  render: renderTableHeader,
};