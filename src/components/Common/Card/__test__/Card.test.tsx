import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '..';

describe('Card test', () => {
    it('can test Card properly', () => {
      const { baseElement } = render(
        <Card data={{}} />
    );
      expect(baseElement).toBeTruthy();
    });
});
