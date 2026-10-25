import styled from 'styled-components';
import type { TableProps } from './Table.types';

// Allows wide Table content to scroll on a small screen.
const TableWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  overflow-x: auto;
`;

// Styles the complete Table.
const StyledTable = styled.table<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  width: 100%;
  min-width: 520px;
  border-collapse: collapse;

  // Uses grey when disabled or the selected colour when enabled.
  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? '#d1d5db' : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? '#6b7280' : '#111827'};

  opacity: ${({ $disabled }) =>
    $disabled ? 0.7 : 1};

  cursor: ${({ $disabled }) =>
    $disabled ? 'not-allowed' : 'default'};
`;

// Gives the header and footer a distinct appearance.
const HeaderCell = styled.th`
  padding: 12px;
  border: 1px solid #9ca3af;
  text-align: left;
  background-color: rgba(37, 99, 235, 0.15);
`;

const DataCell = styled.td`
  padding: 12px;
  border: 1px solid #9ca3af;
  text-align: left;
`;

const FooterCell = styled.td`
  padding: 12px;
  border: 1px solid #9ca3af;
  font-weight: 700;
  text-align: center;
`;

// Example content used when custom Table data is not provided.
const defaultHeaders = ['Component', 'Status'];
const defaultRows = [
  ['Button', 'Complete'],
  ['Label', 'Complete'],
];

// Creates the reusable Table component.
export function Table({
  headers = defaultHeaders,
  rows = defaultRows,
  footerText = 'UI Garden components',
  backgroundColor = '#ffffff',
  disabled = false,
  ...rest
}: TableProps) {
  return (
    <TableWrapper>
      <StyledTable
        $backgroundColor={backgroundColor}
        $disabled={disabled}
        aria-disabled={disabled}
        data-testid="table"
        {...rest}
      >
        <thead>
          <tr>
            {headers.map((header) => (
              <HeaderCell key={header}>
                {header}
              </HeaderCell>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <DataCell key={cellIndex}>
                  {cell}
                </DataCell>
              ))}
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <FooterCell colSpan={headers.length || 1}>
              {footerText}
            </FooterCell>
          </tr>
        </tfoot>
      </StyledTable>
    </TableWrapper>
  );
}