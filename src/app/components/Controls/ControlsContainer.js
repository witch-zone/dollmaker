import { compose } from 'recompose'
import { connect } from 'react-redux'

import * as actions from '../../store/actions'

import Controls from './Controls'

const mapDispatchToProps = {
  onRandomise: actions.randomiseParts,
}

export default compose(
  connect(null, mapDispatchToProps),
)(Controls)
