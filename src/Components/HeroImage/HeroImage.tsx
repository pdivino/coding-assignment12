import styled from 'styled-components';
import type { HeroImageProps } from './HeroImage.types';

// Styles the large banner area.
const HeroSection = styled.section<{
  $imageUrl: string;
  $backgroundColor: string;
  $disabled: boolean;
}>`
  width: 100%;
  min-height: 320px;
  padding: 40px;
  border-radius: 12px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: ${({ $disabled }) =>
    $disabled ? '#6b7280' : '#ffffff'};

  // Uses grey when disabled or the selected colour when enabled.
  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? '#d1d5db' : $backgroundColor};

  // Adds a dark overlay so the text remains readable.
  background-image: ${({ $disabled, $imageUrl }) =>
    $disabled
      ? 'none'
      : `linear-gradient(
          rgba(0, 0, 0, 0.45),
          rgba(0, 0, 0, 0.45)
        ), url("${$imageUrl}")`};

  background-size: cover;
  background-position: center;

  cursor: ${({ $disabled }) =>
    $disabled ? 'not-allowed' : 'default'};

  // Reduces the banner size and spacing on small screens.
  @media (max-width: 480px) {
    min-height: 220px;
    padding: 24px 16px;
  }
`;

// Styles the main hero heading.
const HeroTitle = styled.h1`
  margin: 0 0 12px;
  font-size: clamp(2rem, 6vw, 4rem);
`;

// Styles the supporting hero text.
const HeroSubtitle = styled.p`
  max-width: 700px;
  margin: 0;
  font-size: clamp(1rem, 3vw, 1.4rem);
  line-height: 1.5;
`;

// Creates the reusable HeroImage component.
export function HeroImage({
  title = 'Welcome to UI Garden',
  subtitle = 'Reusable components built with React and Storybook.',
  imageUrl =
    '/ui-garden.svg',
  backgroundColor = '#2563eb',
  disabled = false,
  ...rest
}: HeroImageProps) {
  return (
    <HeroSection
      $imageUrl={imageUrl}
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      data-testid="hero-image"
      {...rest}
    >
      <HeroTitle>{title}</HeroTitle>
      <HeroSubtitle>{subtitle}</HeroSubtitle>
    </HeroSection>
  );
}