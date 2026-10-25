import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { RadioButton } from './RadioButton';

describe('RadioButton component', () => {
  // Required test 1: confirms that the component is visible.
  test('is visible on the page', () => {
    render(<RadioButton label="Visible option" />);

    const radioButton = screen.getByRole('radio');

    expect(radioButton).toBeVisible();
  });

  // Required test 2: confirms that the disabled background is grey.
  test('changes background colour when disabled', () => {
    render(
      <RadioButton
        label="Disabled option"
        disabled
      />
    );

    const container = screen.getByTestId('radio-container');

    expect(container).toHaveStyleRule(
      'background-color',
      '#d1d5db'
    );
  });
});