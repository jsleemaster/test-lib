import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="유저이름" name="테스트" />);
    expect(utils.container).toMatchSnapshot();
  });
  it('shows the props correctly', () => {
    const utils = render(<Profile username="유저이름" name="테스트" />);
    utils.getByText('유저이름'); // 유저이름이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/테스트/); // 정규식 // 을 통과하는 엘리먼트가 있는지 확인
  });
});