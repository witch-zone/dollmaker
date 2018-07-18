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
        items={shelf.items}
        onClickItem={(look) => onClickItem(shelf.shelf, look)}
      />
    ))}

    <button
      type="button"
      onClick={onRandomise}
    >
      choose me a LOOK
    </button>
  </div>
)

Wardrobe.propTypes = {
  shelves: PropTypes.arrayOf(PropTypes.shape({
    shelf: PropTypes.string,
    items: PropTypes.array,
  })),
  onClickItem: PropTypes.func.isRequired,
  onRandomise: PropTypes.func.isRequired,
}

Wardrobe.defaultProps = {
  shelves: [],
}

export default Wardrobe
