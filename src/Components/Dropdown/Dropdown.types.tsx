// Imports the standard properties available to an HTML select menu.
import type { SelectHTMLAttributes } from 'react';

// Describes one choice inside the Dropdown.
export interface DropdownOption {
  // The text shown to the user.
  label: string;

  // The value stored when the choice is selected.
  value: string;
}

// Defines the properties that our Dropdown component can receive.
export interface DropdownProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  // The list of choices displayed in the Dropdown.
  options?: DropdownOption[];

  // Allows the background colour to be changed in Storybook.
  backgroundColor?: string;

  // Determines whether the Dropdown can be used.
  disabled?: boolean;
}