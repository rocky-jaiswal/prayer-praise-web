import { shallow } from 'enzyme';
import * as React from 'react';

import DisplayMessage from '../';

describe('<DisplayMessage />', () => {

  test('shows the message', () => {
    const wrapper = shallow(
      <DisplayMessage message="foo"/>
    );
    expect(wrapper.hasClass('hidden')).toBe(false);
  });

  test('is hidden when no message is provided', () => {
    const wrapper = shallow(
      <DisplayMessage />
    );
    expect(wrapper.hasClass('hidden')).toBe(true);
  });

});
