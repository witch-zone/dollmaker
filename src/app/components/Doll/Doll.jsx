import React from 'react'
import PropTypes from 'prop-types'

const Doll = ({
  layers,
}) => (
  <ul>
    {layers.map(
      (layer) => (
        <li key={layer.shelf}>
          [layer {layer.order}] {layer.shelf}: {layer.src}
        </li>
      )
    )}
  </ul>
)

export default Doll
