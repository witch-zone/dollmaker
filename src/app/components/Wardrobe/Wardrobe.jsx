import React from 'react'
import PropTypes from 'prop-types'

import Shelf from './Shelf'

const Wardrobe = ({
  shelves,
  onClickItem,
  onRandomise,
}) => (
  <div>
    {shelves.map((shelf) => (
      <Shelf
        key={shelf.shelf}
        shelf={shelf.shelf}
        items={shelf.items}
        onClickItem={(look) => onClickItem(shelf.shelf, look)}
      />
    ))}
    
    <button onClick={onRandomise}>
      choose me a LOOK
    </button>
  </div>
)

export default Wardrobe
