import React from 'react'
import PropTypes from 'prop-types'

import Shelf from './Shelf'

const Wardrobe = ({
  shelves,
  onClickItem,
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
  </div>
)

export default Wardrobe
