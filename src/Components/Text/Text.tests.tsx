import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Text } from './Text';

describe('Text component', () => {
  // Required test 1: confirms that the component is visible.
  test('is visible on the page', () => {
    render(<Text content="Visible text" />);

    const text = screen.getByText('Visible text');

    expect(text).toBeVisible();
  });

  // Required test 2: confirms that the disabled background is grey.
  test('changes background colour when disabled', () => {
    render(
      <Text
        content="Disabled text"
        disabled
      />
    );

    const text = screen.getByText('Disabled text');

    expect(text).toHaveStyleRule(
      'background-color',
      '#d1d5db'
    );
  });
});