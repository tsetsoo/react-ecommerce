import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './shop.styles.scss'
import CollectionsOverviewConteiner from '../../components/collections-overview/collections-overview.container'
import CollectionsPageContainer from '../../pages/collection/collection.container'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'


class ShopPage extends React.Component {
    componentDidMount() {
        this.props.fetchCollectionsStart()
    }

    render() {
        const { match } = this.props
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverviewConteiner}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage)