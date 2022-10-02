import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '..';

const handleClick = jest.fn();

describe('Button test', () => {
    it('can test Button properly', () => {
      const { baseElement } = render(
        <Button onClick={handleClick}>Test Btn</Button>
    );
      expect(baseElement).toBeTruthy();
    });
});
