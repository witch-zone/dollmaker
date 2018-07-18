import React from 'react'
import PropTypes from 'prop-types'

const Shelf = ({
  items,
  onClickItem,
}) => (
  <div>
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          <button
            type="button"
            className="c-wardrobe-button"
            onClick={() => onClickItem(item.name)}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
)

Shelf.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  onClickItem: PropTypes.func.isRequired,
}

Shelf.defaultProps = {
  items: [],
}

export default Shelf
