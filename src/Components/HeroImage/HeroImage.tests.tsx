import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { HeroImage } from './HeroImage';

describe('HeroImage component', () => {
  // Required test 1: confirms that the component is visible.
  test('is visible on the page', () => {
    render(
      <HeroImage title="Visible hero" />
    );

    const heading = screen.getByRole('heading', {
      name: 'Visible hero',
    });

    expect(heading).toBeVisible();
  });

  // Required test 2: confirms that the disabled background is grey.
  test('changes background colour when disabled', () => {
    render(
      <HeroImage
        title="Disabled hero"
        disabled
      />
    );

    const hero = screen.getByTestId('hero-image');

    expect(hero).toHaveStyleRule(
      'background-color',
      '#d1d5db'
    );
  });
});