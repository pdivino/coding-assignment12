import styled from 'styled-components';
import type { TableRowProps } from './TableRow.types';

// Styles the complete table row.
const StyledTableRow = styled.tr<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? '#d1d5db' : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? '#6b7280' : '#111827'};

  cursor: ${({ $disabled }) =>
    $disabled ? 'not-allowed' : 'default'};
`;

// Styles each cell created inside the row.
const RowCell = styled.td`
  padding: 12px;
  border: 1px solid #9ca3af;
`;

// Creates the reusable TableRow component.
export function TableRow({
  cells = ['First value', 'Second value'],
  backgroundColor = '#ffffff',
  disabled = false,
  ...rest
}: TableRowProps) {
  return (
    <StyledTableRow
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      data-testid="table-row"
      {...rest}
    >
      {cells.map((cell, index) => (
        <RowCell key={index}>
          {cell}
        </RowCell>
      ))}
    </StyledTableRow>
  );
}