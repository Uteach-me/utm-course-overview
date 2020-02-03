import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CollapseBar from '../client/src/components/CollapseBar.jsx';
import TestComponent from '../client/src/components/CollapseBar.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('CollapseBar', () => {
  it('should show text', () => {
    const wrapper = shallow(<TestComponent />);
    const text = wrapper.find('div p');
    expect(text.text()).toBe('Text goes here');
  });
  it('should hide text when a button is clicked', () => {
    const wrapper = shallow(<CollapseBar />);
    const button = wrapper.find('button');
    button.simulate('click');
    const text = wrapper.find('div p');
    expect(text.length).toBe(0);
  });
});