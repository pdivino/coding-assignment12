import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableRow } from './TableRow';

describe('TableRow component', () => {
  // Required test 1: confirms that the component is visible.
  test('is visible on the page', () => {
    render(
      <table>
        <tbody>
          <TableRow cells={['Visible row']} />
        </tbody>
      </table>
    );

    const cell = screen.getByRole('cell', {
      name: 'Visible row',
    });

    expect(cell).toBeVisible();
  });

  // Required test 2: confirms that the disabled background is grey.
  test('changes background colour when disabled', () => {
    render(
      <table>
        <tbody>
          <TableRow disabled />
        </tbody>
      </table>
    );

    const row = screen.getByTestId('table-row');

    expect(row).toHaveStyleRule(
      'background-color',
      '#d1d5db'
    );
  });
});