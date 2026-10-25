// Imports the standard properties available to an HTML button,
// such as onClick, type, disabled, and aria-label.
import type { ButtonHTMLAttributes } from 'react';

// Defines the properties that our Button component can receive.
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Text displayed inside the button.
  label?: string;

  // Allows the button colour to be changed through Storybook Controls.
  backgroundColor?: string;

  // Determines whether the button is active or disabled.
  disabled?: boolean;
}