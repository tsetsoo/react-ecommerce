import { shallow } from 'enzyme'
import React from 'react'
import CollectionPreview from './collection-preview.component'

it('expect to render CollectionPreview component', () => {
    const title = 'fake-title'
    const fakeItems = [
        {
            id: 'fake-id'
        }
    ]
    expect(shallow(<CollectionPreview title={title} items={fakeItems}/>)).toMatchSnapshot();
})