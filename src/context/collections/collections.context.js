import { createContext } from 'react'

import SHOP_DATA from './shop.data';

const collectionsForOverview = collections => Object.keys(collections).map(key => collections[key])

const CollectionsContext = createContext({collections: SHOP_DATA, collectionsForOverview: collectionsForOverview(SHOP_DATA)})

export default CollectionsContext