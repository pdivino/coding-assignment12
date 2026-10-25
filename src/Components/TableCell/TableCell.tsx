import styled from 'styled-components';
import type { TableCellProps } from './TableCell.types';

// Styles the individual table cell.
const StyledTableCell = styled.td<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  padding: 12px;
  border: 1px solid #9ca3af;
  text-align: left;

  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? '#d1d5db' : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? '#6b7280' : '#111827'};

  cursor: ${({ $disabled }) =>
    $disabled ? 'not-allowed' : 'default'};
`;

// Creates the reusable TableCell component.
export function TableCell({
  content = 'Table cell',
  backgroundColor = '#ffffff',
  disabled = false,
  ...rest
}: TableCellProps) {
  return (
    <StyledTableCell
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      data-testid="table-cell"
      {...rest}
    >
      {content}
    </StyledTableCell>
  );
}