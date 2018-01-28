import { shallow } from 'enzyme';
import * as React from 'react';

import Header from '../';

describe('<Header />', () => {

  test('is working', () => {
    const wrapper = shallow(
      <Header auth0={{}} logout={jest.fn()} switchLanguage={jest.fn()}/>
    );
    expect(wrapper).toBeTruthy();
  });

  test('shows user component', () => {
    const wrapper = shallow(
      <Header auth0={{}} logout={jest.fn()} switchLanguage={jest.fn()}/>
    );
    expect(wrapper.find('User').length).toBe(1);
  });

});
