import styled from 'styled-components';
import type { LabelProps } from './Label.types';

// Creates the visual style for the label.
// The dollar sign marks backgroundColor as a styling-only property.
const StyledLabel = styled.label<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  display: inline-block;
  max-width: 100%;
  padding: 8px 12px;
  border-radius: 6px;

  // Uses grey when disabled or the selected colour when enabled.
  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? '#d1d5db' : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? '#6b7280' : '#111827'};

  // Shows that the label cannot be used when disabled.
  cursor: ${({ $disabled }) =>
    $disabled ? 'not-allowed' : 'default'};

  font-size: 1rem;
  font-weight: 600;
  overflow-wrap: anywhere;

  // Allows the label to use the available width on small screens.
  @media (max-width: 480px) {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
`;

// Creates the reusable Label component.
export function Label({
  text = 'Label',
  backgroundColor = '#dbeafe',
  disabled = false,
  htmlFor,
  ...rest
}: LabelProps) {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      {...rest}
    >
      {text}
    </StyledLabel>
  );
}