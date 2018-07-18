import { compose } from 'recompose'
import { connect } from 'react-redux'

import Doll from './Doll'

import createDollFromLook from '../../utils/createDollFromLook'
import sortByShelfAndOrder from '../../utils/sortByShelfAndOrder'

import * as selectors from '../../store/selectors'

const mapStateToProps = (state) => {
  const layers = createDollFromLook(
    selectors.getCurrentLook(state),
  )

  const sortedLayers = sortByShelfAndOrder(layers)

  return {
    layers: sortedLayers.filter(
      // TODO: fix sparkle layers
      (layer) => layer.shelf !== 'sparkle',
    ),
  }
}

export default compose(
  connect(mapStateToProps),
)(Doll)
