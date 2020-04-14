import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './shop.styles.scss'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPage from '../../pages/collection/collection.component'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections')
        this.unsubscribeFromSnapshot = collectionRef.get().then(async snapshot => {
            this.props.updateCollections(convertCollectionsSnapshotToMap(snapshot))
            this.setState({loading: false})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot()
    }

    render() {
        const { match } = this.props
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={this.state.loading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={this.state.loading} {...props}/>}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})


export default connect(null, mapDispatchToProps)(ShopPage)