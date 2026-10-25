import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableHeader } from './TableHeader';

describe('TableHeader component', () => {
  // Required test 1: confirms that the component is visible.
  test('is visible on the page', () => {
    render(
      <table>
        <TableHeader headings={['Visible heading']} />
      </table>
    );

    const heading = screen.getByRole('columnheader', {
      name: 'Visible heading',
    });

    expect(heading).toBeVisible();
  });

  // Required test 2: confirms that the disabled background is grey.
  test('changes background colour when disabled', () => {
    render(
      <table>
        <TableHeader disabled />
      </table>
    );

    const header = screen.getByTestId('table-header');

    expect(header).toHaveStyleRule(
      'background-color',
      '#d1d5db'
    );
  });
});