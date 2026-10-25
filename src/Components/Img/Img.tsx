import styled from 'styled-components';
import type { ImgProps } from './Img.types';

// Styles the area surrounding the image.
const ImageContainer = styled.div<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  width: 100%;
  max-width: 600px;
  padding: 8px;
  border-radius: 8px;
  box-sizing: border-box;

  // Uses grey when disabled or the selected colour when enabled.
  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? '#d1d5db' : $backgroundColor};

  // Makes the unavailable image appear faded.
  opacity: ${({ $disabled }) =>
    $disabled ? 0.6 : 1};

  // Shows whether the image is available.
  cursor: ${({ $disabled }) =>
    $disabled ? 'not-allowed' : 'default'};
`;

// Makes the actual image responsive.
const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 6px;
  object-fit: cover;
`;

// Creates the reusable Img component.
export function Img({
  src = '/ui-garden.svg',
  alt = 'Sample',
  backgroundColor = '#ffffff',
  disabled = false,
  ...rest
}: ImgProps) {
  return (
    <ImageContainer
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      data-testid="image-container"
    >
      <StyledImage
        src={src}
        alt={alt}
        {...rest}
      />
    </ImageContainer>
  );
}