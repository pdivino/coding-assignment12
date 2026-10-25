import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Dropdown } from './Dropdown';

describe('Dropdown component', () => {
  // Required test 1: confirms that the component is visible.
  test('is visible on the page', () => {
    render(<Dropdown />);

    const dropdown = screen.getByRole('combobox');

    expect(dropdown).toBeVisible();
  });

  // Required test 2: confirms that the disabled background is grey.
  test('changes background colour when disabled', () => {
    render(<Dropdown disabled />);

    const dropdown = screen.getByRole('combobox');

    expect(dropdown).toHaveStyleRule(
      'background-color',
      '#d1d5db'
    );
  });
});