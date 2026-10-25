import styled from 'styled-components';
import type { RadioButtonProps } from './RadioButton.types';

// Styles the container around the radio input and its text.
const RadioContainer = styled.label<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  max-width: 100%;
  padding: 10px 14px;
  border-radius: 6px;
  box-sizing: border-box;

  // Uses grey when disabled or the selected colour when enabled.
  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? '#d1d5db' : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? '#6b7280' : '#111827'};

  // Shows whether the radio button can be selected.
  cursor: ${({ $disabled }) =>
    $disabled ? 'not-allowed' : 'pointer'};

  overflow-wrap: anywhere;

  // Allows the component to fill a small screen.
  @media (max-width: 480px) {
    display: flex;
    width: 100%;
  }
`;

// Styles the circular radio input.
const StyledRadio = styled.input`
  width: 18px;
  height: 18px;
  margin: 0;
  accent-color: #2563eb;
`;

// Creates the reusable RadioButton component.
export function RadioButton({
  label = 'Radio option',
  backgroundColor = '#f3f4f6',
  disabled = false,
  ...rest
}: RadioButtonProps) {
  return (
    <RadioContainer
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      data-testid="radio-container"
    >
      <StyledRadio
        type="radio"
        disabled={disabled}
        {...rest}
      />

      <span>{label}</span>
    </RadioContainer>
  );
}