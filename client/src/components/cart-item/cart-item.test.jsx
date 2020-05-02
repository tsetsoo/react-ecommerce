import { shallow } from 'enzyme'
import React from 'react'
import { CartItem } from './cart-item.component'

it('expect to render CartItem component', () => {
    const fakeItem = { imageUrl: 'fake-url', price: 10, name: 'fake-item', quantity: 1 }
    expect(shallow(<CartItem item={fakeItem}/>)).toMatchSnapshot();
})