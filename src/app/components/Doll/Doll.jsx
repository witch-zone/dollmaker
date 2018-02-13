import React from 'react'
import PropTypes from 'prop-types'

const Doll = ({
  accessories = {},
  bottom = {},
  hair = {},
  hat = {},
  shoes = {},
  sparkle = {},
  top = {},
}) => (
  <ul>
    <li>Accessories: {accessories.name}</li>
    <li>Bottom: {bottom.name}</li>
    <li>Hair: {hair.name}</li>
    <li>Hat: {hat.name}</li>
    <li>Shoes: {shoes.name}</li>
    <li>Sparkle: {sparkle.name}</li>
    <li>Top: {top.name}</li>
  </ul>
)

export default Doll
