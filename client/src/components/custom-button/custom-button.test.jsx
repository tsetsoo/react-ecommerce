import { shallow } from 'enzyme'
import React from 'react'
import CustomButton from './custom-button.component'

it('expect to render CustomButton component', () => {
    expect(shallow(<CustomButton />)).toMatchSnapshot();
})