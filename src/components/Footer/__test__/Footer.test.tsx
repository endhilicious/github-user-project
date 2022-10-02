import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '..';

describe('Footer test', () => {
    it('can test Footer properly', () => {
      const { baseElement } = render(
        <Footer />
    );
      expect(baseElement).toBeTruthy();
    });
});
