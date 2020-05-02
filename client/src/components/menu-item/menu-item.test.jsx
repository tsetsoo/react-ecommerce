import { shallow } from 'enzyme'
import React from 'react'
import { MenuItem } from './menu-item.component'

it('expect to render MenuItem component', () => {
    const title = 'fake-item';
    expect(shallow(<MenuItem title={title} />)).toMatchSnapshot();
})