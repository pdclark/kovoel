/* global expect */
/* global it */
/* global describe */
/* global jest */
import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import LoginContainer from '../../containers/Login';


const mockStore = configureStore();

describe('LoginContainer', () => {
  let wrapper;
  let store;

  it('maps state and dispatch to props', () => {
    store = mockStore(1);
    store.dispatch = jest.fn();
    wrapper = shallow(<LoginContainer store={store}/>);

    expect(wrapper.props()).toEqual(expect.objectContaining(null));
  });
});
