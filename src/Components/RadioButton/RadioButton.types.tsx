// Imports the standard properties available to an HTML input.
import type { InputHTMLAttributes } from 'react';

// Defines the properties that our RadioButton component can receive.
export interface RadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  // Text displayed beside the radio button.
  label?: string;

  // Allows the background colour to be changed in Storybook.
  backgroundColor?: string;

  // Determines whether the radio button can be selected.
  disabled?: boolean;
}