import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Img } from './Img';

describe('Img component', () => {
  // Required test 1: confirms that the component is visible.
  test('is visible on the page', () => {
    render(
      <Img
        src="test-image.jpg"
        alt="Visible example"
      />
    );

    const image = screen.getByRole('img', {
      name: 'Visible example',
    });

    expect(image).toBeVisible();
  });

  // Required test 2: confirms that the disabled background is grey.
  test('changes background colour when disabled', () => {
    render(
      <Img
        src="test-image.jpg"
        alt="Disabled example"
        disabled
      />
    );

    const container = screen.getByTestId('image-container');

    expect(container).toHaveStyleRule(
      'background-color',
      '#d1d5db'
    );
  });
});