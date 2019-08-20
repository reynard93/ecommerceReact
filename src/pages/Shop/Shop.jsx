import React from 'react';

import SHOPDATA from './shopData'

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOPDATA
    }
  }
  render() {
    return <div>SHOP PAGE</div>
  }
}

export default ShopPage;