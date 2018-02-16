import { compose } from 'recompose'
import { connect } from 'react-redux'

import Doll from './Doll'

import createDollFromLook from '../../utils/createDollFromLook'
import * as selectors from '../../store/selectors'

const mapStateToProps = (state) => ({
  layers: createDollFromLook(
    selectors.getCurrentLook(state),
  ),
})

export default compose(
  connect(mapStateToProps),
)(Doll)
