import React from 'react'
import PropTypes from 'prop-types'

const Shelf = ({
  shelf,
  items,
  onClickItem,
}) => (
  <div>
    <h2>{shelf}</h2>

    <ul>
      {items.map((item) => (
        <li key={item.name}>
          <a
            style={{
              textDecoration: 'underline',
              cursor: 'pointer',
              color: 'blue',
            }}
            onClick={() => onClickItem(item.name)}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default Shelf
