import React from 'react'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'

import CollectionPage from './collection.component'
import Spinner from '../../components/spinner/spinner.component'

const GET_COLLECTIONS = gql`
query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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

const CollectionPageContainer = ({ match }) => {
    const { loading, data } = useQuery(GET_COLLECTIONS, {
        variables: { title: match.params.collectionId },
      })
    return (
        loading ?  <Spinner />
        : <CollectionPage collection={data.getCollectionsByTitle} />
    )
}

export default CollectionPageContainer