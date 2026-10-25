import styled from 'styled-components';
import type { CardProps } from './Card.types';

// Styles the outer Card container.
const CardContainer = styled.div<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  width: 100%;
  max-width: 360px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;

  // Uses grey when disabled or the selected colour when enabled.
  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? '#d1d5db' : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? '#6b7280' : '#111827'};

  opacity: ${({ $disabled }) =>
    $disabled ? 0.7 : 1};

  cursor: ${({ $disabled }) =>
    $disabled ? 'not-allowed' : 'default'};

  box-shadow: ${({ $disabled }) =>
    $disabled
      ? 'none'
      : '0 4px 12px rgba(0, 0, 0, 0.12)'};

  // Allows the Card to fill the available width on small screens.
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

// Styles the image at the top of the Card.
const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 190px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 160px;
  }
`;

// Provides spacing around the written Card content.
const CardContent = styled.div`
  padding: 20px;
`;

// Styles the Card heading.
const CardTitle = styled.h2`
  margin: 0 0 10px;
  font-size: 1.4rem;
`;

// Styles the Card description.
const CardDescription = styled.p`
  margin: 0;
  line-height: 1.5;
`;

// Creates the reusable Card component.
export function Card({
  title = 'Card title',
  description = 'This is a reusable Card component.',
  imageUrl =
    '/ui-garden.svg',
  backgroundColor = '#ffffff',
  disabled = false,
  ...rest
}: CardProps) {
  return (
    <CardContainer
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      data-testid="card"
      {...rest}
    >
      <CardImage
        src={imageUrl}
        alt=""
      />

      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardContent>
    </CardContainer>
  );
}