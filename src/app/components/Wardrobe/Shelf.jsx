import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const getShelfLabel = (shelf, item) => (
  shelf === 'glasses'
    ? `Try on the ${item} ${shelf}!`
    : `Wear ${item}'s ${shelf}!`
)

const Shelf = ({
  name,
  selected,
  items,
  onClickItem,
}) => (
  <div
    className={classnames(
      'c-wardrobe__shelf',
      `c-wardrobe__shelf--${name}`,
      `c-${name}-shelf`,
    )}
  >
    {items.map((item) => (
      <button
        key={item.name}
        type="button"
        title={getShelfLabel(name, item.name)}
        className={classnames(
          'c-wardrobe__button',
          'c-look-icon',
          item.name,
          {
            'is-selected': selected === item.name,
          },
        )}
        onClick={() => onClickItem(item.name)}
      />
    ))}
  </div>
)

Shelf.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  onClickItem: PropTypes.func.isRequired,
}

Shelf.defaultProps = {
  items: [],
  selected: null,
}

export default Shelf
