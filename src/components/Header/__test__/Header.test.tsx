import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../';

describe('Header test', () => {
    it('can test Header properly', () => {
      const { baseElement } = render(
        <Header />
    );
      expect(baseElement).toBeTruthy();
    });
});
