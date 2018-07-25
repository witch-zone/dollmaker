import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Controls from './Controls'
import Shelf from './Shelf'

const Wardrobe = ({
  shelves,
  selected,
  onClickItem,
  onRandomise,
  className,
}) => (
  <nav
    className={classnames(
      'c-wardrobe-wrapper',
      className,
    )}
  >
    <div className="c-wardrobe-wrapper__wardrobe c-wardrobe">
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

    <Controls
      onRandomise={onRandomise}
      className="c-wardrobe-wrapper__controls"
    />
  </nav>
)

Wardrobe.propTypes = {
  shelves: PropTypes.arrayOf(PropTypes.shape({
    shelf: PropTypes.string,
    items: PropTypes.array,
  })),
  selected: PropTypes.shape({}),
  onClickItem: PropTypes.func.isRequired,
  onRandomise: PropTypes.func.isRequired,
  className: PropTypes.string,
}

Wardrobe.defaultProps = {
  shelves: [],
  selected: {},
  className: null,
}

export default Wardrobe
