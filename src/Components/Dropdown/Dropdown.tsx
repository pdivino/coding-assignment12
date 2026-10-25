import styled from 'styled-components';
import type { DropdownProps } from './Dropdown.types';

// Creates the visual style for the Dropdown.
const StyledDropdown = styled.select<{
  $backgroundColor: string;
}>`
  width: 100%;
  max-width: 320px;
  padding: 12px;
  border: 1px solid #9ca3af;
  border-radius: 6px;
  box-sizing: border-box;

  // Uses grey when disabled or the selected colour when enabled.
  background-color: ${({ disabled, $backgroundColor }) =>
    disabled ? '#d1d5db' : $backgroundColor};

  color: ${({ disabled }) =>
    disabled ? '#6b7280' : '#111827'};

  // Shows whether the Dropdown can be used.
  cursor: ${({ disabled }) =>
    disabled ? 'not-allowed' : 'pointer'};

  font-size: 1rem;

  // Allows the Dropdown to fit smaller screens.
  @media (max-width: 480px) {
    max-width: 100%;
    font-size: 0.9rem;
  }
`;

// Choices used when no custom options are provided.
const defaultOptions = [
  { label: 'Choose an option', value: '' },
  { label: 'First option', value: 'first' },
  { label: 'Second option', value: 'second' },
];

// Creates the reusable Dropdown component.
export function Dropdown({
  options = defaultOptions,
  backgroundColor = '#ffffff',
  disabled = false,
  ...rest
}: DropdownProps) {
  return (
    <StyledDropdown
      $backgroundColor={backgroundColor}
      disabled={disabled}
      aria-label="Dropdown"
      {...rest}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </StyledDropdown>
  );
}