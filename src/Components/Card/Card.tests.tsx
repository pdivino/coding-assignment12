import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Card } from './Card';

describe('Card component', () => {
  // Required test 1: confirms that the component is visible.
  test('is visible on the page', () => {
    render(
      <Card title="Visible Card" />
    );

    const heading = screen.getByRole('heading', {
      name: 'Visible Card',
    });

    expect(heading).toBeVisible();
  });

  // Required test 2: confirms that the disabled background is grey.
  test('changes background colour when disabled', () => {
    render(
      <Card
        title="Disabled Card"
        disabled
      />
    );

    const card = screen.getByTestId('card');

    expect(card).toHaveStyleRule(
      'background-color',
      '#d1d5db'
    );
  });
});