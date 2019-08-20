import React from 'react';
import {withRouter} from 'react-router-dom';

import './MenuItem.scss'

const MenuItem = (props) => (
  <div key={props.id} className={`${props.size} menu-item`} onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
    <div 
    className='background-image'
    style={{
    backgroundImage: `url(${props.imageUrl})`
  }}></div>
    <div 
    className="content">
      <h1 className='title'>{props.title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem);