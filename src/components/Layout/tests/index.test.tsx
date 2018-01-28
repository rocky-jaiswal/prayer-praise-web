import { shallow } from 'enzyme';
import * as React from 'react';

import Layout from '../';

describe('<Layout />', () => {

  test('is working', () => {
    const wrapper = shallow(
      <Layout
        auth0={{}}
        logout={jest.fn()}
        switchLanguage={jest.fn()}
        sidebarVisible={true}
        toggleSidebar={jest.fn()}
      />
    );
    expect(wrapper).toBeTruthy();
  });

  test('shows header', () => {
    const wrapper = shallow(
      <Layout
        auth0={{}}
        logout={jest.fn()}
        switchLanguage={jest.fn()}
        sidebarVisible={true}
        toggleSidebar={jest.fn()}
      />
    );
    expect(wrapper.find('Header').length).toBe(1);
  });

  test('shows footer', () => {
    const wrapper = shallow(
      <Layout
        auth0={{}}
        logout={jest.fn()}
        switchLanguage={jest.fn()}
        sidebarVisible={true}
        toggleSidebar={jest.fn()}
      />
    );
    expect(wrapper.find('Footer').length).toBe(1);
  });

  test('shows sidebar', () => {
    const wrapper = shallow(
      <Layout
        auth0={{}}
        logout={jest.fn()}
        switchLanguage={jest.fn()}
        sidebarVisible={true}
        toggleSidebar={jest.fn()}
      />
    );
    expect(wrapper.find('Sidebar').length).toBe(1);
  });

});
