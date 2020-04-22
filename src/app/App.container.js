import React from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'

import App from './App'

const SET_CURRENT_USER = gql`
    mutation SetCurrentUser($user: User!) {
        setCurrentUser(user: $user) @client
    }
`

const GET_CURRENT_USER = gql`
    {
        currentUser @client
    }
`

const AppContainer = () => {
    const [ setCurrentUser ] = useMutation(SET_CURRENT_USER)
    const {data: {currentUser}} = useQuery(GET_CURRENT_USER)
    return (
        <App setCurrentUser={user => setCurrentUser({ variables: { user }})} currentUser={currentUser}/>
    )
}

export default AppContainer