import styled from 'styled-components';
import type { TableHeaderProps } from './TableHeader.types';

// Styles the table header section.
const StyledTableHeader = styled.thead<{
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

// Styles each heading cell.
const HeadingCell = styled.th`
  padding: 12px;
  border: 1px solid #9ca3af;
  text-align: left;
`;

// Creates the reusable TableHeader component.
export function TableHeader({
  headings = ['Heading one', 'Heading two'],
  backgroundColor = '#dbeafe',
  disabled = false,
  ...rest
}: TableHeaderProps) {
  return (
    <StyledTableHeader
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      data-testid="table-header"
      {...rest}
    >
      <tr>
        {headings.map((heading) => (
          <HeadingCell key={heading}>
            {heading}
          </HeadingCell>
        ))}
      </tr>
    </StyledTableHeader>
  );
}