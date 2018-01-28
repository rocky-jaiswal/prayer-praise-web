import { shallow } from 'enzyme';
import * as React from 'react';

import LoadingSpinner from '../';

describe('<LoadingSpinner />', () => {

  test('is working', () => {
    const wrapper = shallow(
      <LoadingSpinner/>
    );
    expect(wrapper).toBeTruthy();
  });

});
