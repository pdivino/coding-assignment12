import styled from 'styled-components';
import type { TextProps } from './Text.types';

// Creates the visual style for the Text component.
const StyledText = styled.p<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  max-width: 100%;
  margin: 0;
  padding: 12px;
  border-radius: 6px;
  box-sizing: border-box;

  // Uses grey when disabled or the selected colour when enabled.
  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? '#d1d5db' : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? '#6b7280' : '#111827'};

  // Shows that the text is unavailable when disabled.
  cursor: ${({ $disabled }) =>
    $disabled ? 'not-allowed' : 'text'};

  font-size: 1rem;
  line-height: 1.5;
  overflow-wrap: anywhere;

  // Slightly reduces the text size on small screens.
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

// Creates the reusable Text component.
export function Text({
  content = 'Sample text',
  backgroundColor = '#f3f4f6',
  disabled = false,
  ...rest
}: TextProps) {
  return (
    <StyledText
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      {...rest}
    >
      {content}
    </StyledText>
  );
}