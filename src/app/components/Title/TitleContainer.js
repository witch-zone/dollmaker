import { compose } from 'recompose'
import { connect } from 'react-redux'

import * as selectors from '../../store/selectors'

import createTitleFromLook from '../../utils/createTitleFromLook'

import Title from './Title'

const mapStateToProps = (state) => ({
  title: createTitleFromLook(
    selectors.getCurrentLook(state),
  ),
})

export default compose(
  connect(mapStateToProps),
)(Title)
