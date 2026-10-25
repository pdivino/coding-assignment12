import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Label } from './Label';

describe('Label component', () => {
  // Required test 1: confirms that the component is visible.
  test('is visible on the page', () => {
    render(<Label text="Email address" />);

    const label = screen.getByText('Email address');

    expect(label).toBeVisible();
  });

  // Required test 2: confirms that the disabled background is grey.
  test('changes background colour when disabled', () => {
    render(
      <Label
        text="Disabled label"
        disabled
      />
    );

    const label = screen.getByText('Disabled label');

    expect(label).toHaveStyleRule(
      'background-color',
      '#d1d5db'
    );
  });
});