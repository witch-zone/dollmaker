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
        key={shelf.name}
        name={shelf.name}
        items={shelf.items}
        onClickItem={(look) => onClickItem(shelf.name, look)}
      />
    ))}
  </div>
)

export default Wardrobe
