// Imports the standard properties available to an HTML image.
import type { ImgHTMLAttributes } from 'react';

// Defines the properties that our Img component can receive.
export interface ImgProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  // Location of the image file.
  src?: string;

  // Text that describes the image for accessibility.
  alt?: string;

  // Allows the surrounding background colour to change in Storybook.
  backgroundColor?: string;

  // Determines whether the image should appear disabled.
  disabled?: boolean;
}