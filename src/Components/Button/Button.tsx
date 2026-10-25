import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

// The dollar sign makes backgroundColor a styling-only property.
// Styled Components will not send it to the HTML button.
const StyledButton = styled.button<{ $backgroundColor: string }>`
  background-color: ${({ disabled, $backgroundColor }) =>
    disabled ? '#d1d5db' : $backgroundColor};

  color: ${({ disabled }) => (disabled ? '#6b7280' : '#ffffff')};
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  max-width: 100%;
  font-size: 1rem;
  font-weight: 600;

  // Shows whether the user is allowed to click the button.
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  // Makes the button fill the available width on small screens.
  @media (max-width: 480px) {
    width: 100%;
  }
`;

// The component receives its allowed properties from ButtonProps.
export function Button({
  label = 'Button',
  backgroundColor = '#2563eb',
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      disabled={disabled}
      {...rest}
    >
      {label}
    </StyledButton>
  );
}