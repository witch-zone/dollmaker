import React from 'react'
import PropTypes from 'prop-types'

const Shelf = ({
  shelf,
  items,
  onClickItem,
}) => (
  <div>
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          <button
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

export default Shelf
