import { prop } from 'ramda'
import composeSelectedLook from '../utils/composeSelectedLook'

const getLooks = prop('looks')
const getSelectedParts = prop('doll')

const getCurrentLook = (state) => (
  composeSelectedLook(
    getLooks(state),
    getSelectedParts(state),
  )
)

export {
  getLooks,
  getSelectedParts,
  getCurrentLook,
}
