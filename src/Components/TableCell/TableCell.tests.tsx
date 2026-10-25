import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableCell } from './TableCell';

describe('TableCell component', () => {
  // Required test 1: confirms that the component is visible.
  test('is visible on the page', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell content="Visible cell" />
          </tr>
        </tbody>
      </table>
    );

    const cell = screen.getByRole('cell', {
      name: 'Visible cell',
    });

    expect(cell).toBeVisible();
  });

  // Required test 2: confirms that the disabled background is grey.
  test('changes background colour when disabled', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell disabled />
          </tr>
        </tbody>
      </table>
    );

    const cell = screen.getByTestId('table-cell');

    expect(cell).toHaveStyleRule(
      'background-color',
      '#d1d5db'
    );
  });
});