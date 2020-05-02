import { shallow } from 'enzyme'
import React from 'react'
import FormInput from './form-input.component'

it('expect to render FormInput component', () => {
    expect(shallow(<FormInput />)).toMatchSnapshot();
})