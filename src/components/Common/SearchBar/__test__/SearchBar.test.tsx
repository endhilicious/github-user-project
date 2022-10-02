import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '..';

describe('SearchBar test', () => {
    it('can test SearchBar properly', () => {
      const { baseElement } = render(
        <SearchBar />
    );
      expect(baseElement).toBeTruthy();
    });
});
