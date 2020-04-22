import React, { useContext } from 'react';
import CollectionsContext from '../../context/collections/collections.context';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';


const CollectionsOverview = () => {
  const { collectionsForOverview } = useContext(CollectionsContext)
  
  return (
    <div className='collections-overview'>
      {collectionsForOverview.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
};


export default CollectionsOverview;
