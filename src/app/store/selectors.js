import { prop } from 'ramda'
import composeSelectedLook from '../utils/composeSelectedLook'

const getLooks = prop('looks')
const getWardrobe = prop('wardrobe')
const getSelectedParts = prop('doll')

const getCurrentLook = (state) => (
  composeSelectedLook(
    getLooks(state),
    getSelectedParts(state),
  )
)

export {
  getLooks,
  getWardrobe,
  getSelectedParts,
  getCurrentLook,
}
