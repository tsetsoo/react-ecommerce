import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './shop.styles.scss'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import Spinner from '../../components/spinner/spinner.component'

const CollectionsOverviewConteiner = lazy(() => import('../../components/collections-overview/collections-overview.container'))
const CollectionsPageContainer = lazy(() => import('../../pages/collection/collection.container'))


const ShopPage = ({match, fetchCollectionsStart}) =>  {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
        <div className='shop-page'>
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewConteiner}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer}/>
            </Suspense>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage)