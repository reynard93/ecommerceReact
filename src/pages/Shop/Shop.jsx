import React from 'react';

import SHOPDATA from './shopData'
import CollectionPreview from '../../components/PreviewCollection/PreviewCollection';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOPDATA
    }
  }
  render() {
    const {collections} = this.state;
    return (<div className='shop-page'>
      {
        collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps}/>
        ))
      }
    </div>)
  }
}

export default ShopPage;