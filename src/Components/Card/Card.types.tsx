// Imports the standard properties available to an HTML div.
import type { HTMLAttributes } from 'react';

// Defines the properties that our Card component can receive.
export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  // Main heading displayed in the Card.
  title?: string;

  // Supporting information displayed below the heading.
  description?: string;

  // Optional image displayed at the top of the Card.
  imageUrl?: string;

  // Allows the Card background colour to change in Storybook.
  backgroundColor?: string;

  // Determines whether the Card should appear disabled.
  disabled?: boolean;
}