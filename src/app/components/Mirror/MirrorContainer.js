import { compose } from 'recompose'
import { connect } from 'react-redux'

import Mirror from './Mirror'

import createTitleFromLook from '../../utils/createTitleFromLook'
import createDollFromLook from '../../utils/createDollFromLook'
import sortByShelfAndOrder from '../../utils/sortByShelfAndOrder'

import * as actions from '../../store/actions'
import * as selectors from '../../store/selectors'

const mapStateToProps = (state) => {
  const currentLook = selectors.getCurrentLook(state)

  const title = createTitleFromLook(currentLook)

  const layers = createDollFromLook(currentLook)
  const sortedLayers = sortByShelfAndOrder(layers)

  return {
    isLoading: selectors.isLoading(state),
    layers: sortedLayers,
    title,
  }
}

const mapDispatchToProps = {
  onStartLoad: actions.setLoading,
  onFinishLoad: actions.clearLoading,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Mirror)
