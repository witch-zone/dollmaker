import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Shelf = ({
  name,
  items,
  onClickItem,
}) => (
  <div
    className={classnames(
      'c-wardrobe__shelf',
      `c-wardrobe__shelf--${name}`,
    )}
  >
    <div className="c-wardrobe__items">
      {items.map((item) => (
        <button
          key={item.name}
          type="button"
          className={classnames(
            'c-wardrobe-button',
            'c-look-icon',
            item.name,
          )}
          onClick={() => onClickItem(item.name)}
        >
          {item.name}
        </button>
      ))}
    </div>
  </div>
)

Shelf.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  onClickItem: PropTypes.func.isRequired,
}

Shelf.defaultProps = {
  items: [],
}

export default Shelf
