import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RepoLists from '../';

describe('RepoLists test', () => {
    it('can test RepoLists properly', () => {
      const { baseElement } = render(
        <RepoLists />
    );
      expect(baseElement).toBeTruthy();
    });
});
