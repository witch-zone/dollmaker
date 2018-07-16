import { compose } from 'recompose'
import { connect } from 'react-redux'

import Doll from './Doll'

import createDollFromLook from '../../utils/createDollFromLook'
import sortByWardrobeShelves from '../../utils/sortByWardrobeShelves'
import sortByOrder from '../../utils/sortByOrder'
import * as selectors from '../../store/selectors'

const mapStateToProps = (state) => ({
  layers: sortByOrder(sortByWardrobeShelves(
    createDollFromLook(
      selectors.getCurrentLook(state),
    ),
  )).filter(
    // TODO: fix sparkle layers
    (layer) => layer.shelf !== 'sparkle',
  ),
})

export default compose(
  connect(mapStateToProps),
)(Doll)
