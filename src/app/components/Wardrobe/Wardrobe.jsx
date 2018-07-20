import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Shelf from './Shelf'

const Wardrobe = ({
  shelves,
  selected,
  onClickItem,
  className,
}) => (
  <div
    className={classnames(
      'c-wardrobe',
      className,
    )}
  >
    {shelves.map((shelf) => (
      <Shelf
        key={shelf.shelf}
        name={shelf.shelf}
        items={shelf.items}
        selected={selected[shelf.shelf]}
        onClickItem={(look) => onClickItem(shelf.shelf, look)}
      />
    ))}
  </div>
)

Wardrobe.propTypes = {
  shelves: PropTypes.arrayOf(PropTypes.shape({
    shelf: PropTypes.string,
    items: PropTypes.array,
  })),
  selected: PropTypes.shape({}),
  onClickItem: PropTypes.func.isRequired,
  className: PropTypes.string,
}

Wardrobe.defaultProps = {
  shelves: [],
  selected: {},
  className: null,
}

export default Wardrobe
