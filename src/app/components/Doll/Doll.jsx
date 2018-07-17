import React, { Component } from 'react'
import PropTypes from 'prop-types'

import promiseMeAnImage from '../../utils/promiseMeAnImage'

const baseDoll = promiseMeAnImage('assets/base.png')

const CANVAS_HEIGHT = 1331
const CANVAS_WIDTH = 678

class Doll extends Component {
  componentDidMount() {
    this.updateDoll()
  }

  componentDidUpdate() {
    this.updateDoll()
  }

  getNewGraphicsContext() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    
    // setting scale and drawing twice as big then sizing down using
    // style widths allows for a much nicer display on retina-y screens
    ctx.resetTransform()
    ctx.scale(2, 2)

    // clears out any old dolls drawn onto the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    return ctx
  }

  async updateDoll() {
    const {
      layers,
    } = this.props

    const imagesToLoad = layers
      .map(
        (layer) => promiseMeAnImage(`assets/${layer.src}`)
      )

    // IDEA: spicy state for incomplete dolls?
    // TODO: add loading state for doll

    // TODO: handle errors in loading images
    const loadedImages = await Promise.all([
      ...imagesToLoad,
      baseDoll,
    ])

    const ctx = this.getNewGraphicsContext()

    // we reverse the images before drawing so as to draw them
    // from the bottom layer up; the doll layers should be passed
    // to this component as a series of onion skin layers
    loadedImages
      .reverse()
      .forEach(
        (image) => ctx.drawImage(image, 0, 0, 339, 665)
      )
  }

  render() {
    const {
      layers,
    } = this.props

    return (
      <canvas
        ref="canvas"
        height={CANVAS_HEIGHT}
        width={CANVAS_WIDTH}
        style={{
          width: `100%`,
          maxWidth: `${CANVAS_WIDTH / 2}px`,
          height: `auto`,
          objectFit: 'contain',
        }}
      />
    )
  }
}

export default Doll
