import { compose } from 'recompose'
import { connect } from 'react-redux'

import * as selectors from '../../store/selectors'
import * as actions from '../../store/actions'

import createTitleFromLook from '../../utils/createTitleFromLook'

import Title from './Title'

const mapStateToProps = (state) => ({
  title: createTitleFromLook(
    selectors.getLooks(state),
    selectors.getSelectedParts(state),
  ),
})

const mapDispatchToProps = {
  onRandomise: actions.randomiseParts,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Title)
