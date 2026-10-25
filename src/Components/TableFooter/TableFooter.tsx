import styled from 'styled-components';
import type { TableFooterProps } from './TableFooter.types';

// Styles the table footer section.
const StyledTableFooter = styled.tfoot<{
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

// Styles the cell inside the footer.
const FooterCell = styled.td`
  padding: 12px;
  border: 1px solid #9ca3af;
  text-align: center;
  font-weight: 700;
`;

// Creates the reusable TableFooter component.
export function TableFooter({
  content = 'Table footer',
  columnSpan = 2,
  backgroundColor = '#dbeafe',
  disabled = false,
  ...rest
}: TableFooterProps) {
  return (
    <StyledTableFooter
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      data-testid="table-footer"
      {...rest}
    >
      <tr>
        <FooterCell colSpan={columnSpan}>
          {content}
        </FooterCell>
      </tr>
    </StyledTableFooter>
  );
}