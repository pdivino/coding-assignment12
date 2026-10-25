// Imports the standard properties available to an HTML section.
import type { HTMLAttributes } from 'react';

// Defines the properties that our HeroImage component can receive.
export interface HeroImageProps
  extends HTMLAttributes<HTMLElement> {
  // Main heading displayed over the image.
  title?: string;

  // Supporting text displayed below the heading.
  subtitle?: string;

  // Location of the background image.
  imageUrl?: string;

  // Fallback background colour and Storybook colour control.
  backgroundColor?: string;

  // Determines whether the HeroImage should appear disabled.
  disabled?: boolean;
}