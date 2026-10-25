import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from './Button';

describe('Button component', () => {
  // Required test 1: confirms that the component is visible.
  test('is visible on the page', () => {
    render(<Button label="Test button" />);

    const button = screen.getByRole('button', {
      name: 'Test button',
    });

    expect(button).toBeVisible();
  });

  // Required test 2: confirms that the disabled background is grey.
  test('changes background colour when disabled', () => {
    render(<Button label="Disabled button" disabled />);

    const button = screen.getByRole('button', {
      name: 'Disabled button',
    });

    expect(button).toHaveStyleRule(
      'background-color',
      '#d1d5db'
    );
  });
});