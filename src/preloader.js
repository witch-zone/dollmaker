import { Component } from 'react'
import PropTypes from 'prop-types'

import promiseMeAnImage from './app/utils/promiseMeAnImage'

const showApp = () => setTimeout(
  () => {
    document.getElementById('💭').classList.add('‼️')
    document.getElementById('✨').classList.add('‼️')
  }, 666,
)

class Preloader extends Component {
  async componentDidMount() {
    await Promise.all([
      promiseMeAnImage('assets/wardrobe-1x.png'),
      promiseMeAnImage('assets/icons.png'),
    ])

    showApp()
  }

  render() {
    const {
      children,
    } = this.props

    return children
  }
}

Preloader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Preloader
