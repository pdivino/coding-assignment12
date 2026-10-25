import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableFooter } from './TableFooter';

describe('TableFooter component', () => {
  // Required test 1: confirms that the component is visible.
  test('is visible on the page', () => {
    render(
      <table>
        <TableFooter content="Visible footer" />
      </table>
    );

    const footerCell = screen.getByRole('cell', {
      name: 'Visible footer',
    });

    expect(footerCell).toBeVisible();
  });

  // Required test 2: confirms that the disabled background is grey.
  test('changes background colour when disabled', () => {
    render(
      <table>
        <TableFooter disabled />
      </table>
    );

    const footer = screen.getByTestId('table-footer');

    expect(footer).toHaveStyleRule(
      'background-color',
      '#d1d5db'
    );
  });
});