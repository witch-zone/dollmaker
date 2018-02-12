import { comopse } from 'recompose'
import { connect } from 'react-redux'
import Wardrobe from './Wardrobe'

// but dani isn't a wardrobe already a kind of container?
// yes. but where do you keep your wardrobes

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Wardrobe)
