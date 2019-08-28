import React, {useState} from 'react';
import MenuItem from '../MenuItem/MenuItem'
import './Directory.scss';

const Directory = () => {

  const sections = [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      size: 'large',
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      size: 'large',
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      size: 'large',
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ];
  
// eslint-disable-next-line
  const [Sections, setSections] = useState(sections);

  return (
    <div className="directory-menu">
      {
        Sections.map(section => (
          <MenuItem key={section.id} {...section} />
        ))
      }
    </div>
  )

}

export default Directory;

