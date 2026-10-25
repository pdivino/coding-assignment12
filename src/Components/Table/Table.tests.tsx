import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Table } from './Table';

describe('Table component', () => {
  // Required test 1: confirms that the component is visible.
  test('is visible on the page', () => {
    render(<Table />);

    const table = screen.getByRole('table');

    expect(table).toBeVisible();
  });

  // Required test 2: confirms that the disabled background is grey.
  test('changes background colour when disabled', () => {
    render(<Table disabled />);

    const table = screen.getByTestId('table');

    expect(table).toHaveStyleRule(
      'background-color',
      '#d1d5db'
    );
  });
});