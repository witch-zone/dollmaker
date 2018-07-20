import { compose } from 'recompose'
import { connect } from 'react-redux'

import * as actions from '../../store/actions'
import * as selectors from '../../store/selectors'

import Wardrobe from './Wardrobe'

// but dani isn't a wardrobe already a kind of container?
// yes. but where do you keep your wardrobes

const mapStateToProps = (state) => ({
  shelves: selectors.getWardrobe(state),
  selected: selectors.getSelectedParts(state),
})

const mapDispatchToProps = {
  onClickItem: actions.setPart,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Wardrobe)
