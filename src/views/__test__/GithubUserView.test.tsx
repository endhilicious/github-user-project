import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import GithubUserView from '../GithubUserView';

describe('GithubUserView test', () => {
    it('can test GithubUserView properly', () => {
      const { baseElement } = render(
        <GithubUserView />
    );
      expect(baseElement).toBeTruthy();
    });
});
