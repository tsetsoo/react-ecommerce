import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'

import CollectionOverview from './collections-overview.component'
import Spinner from '../spinner/spinner.component'

const GET_COLLECTIONS = gql`
{
    collections {
        id
        title
        items {
            id
            name
            price
            imageUrl
        }
    }
}
`

const CollectionOverviewContainer = () => {
    const { loading, data } = useQuery(GET_COLLECTIONS)
    return (
        loading ? <Spinner />
        : <CollectionOverview collections={data.collections} />
    )
}

export default CollectionOverviewContainer