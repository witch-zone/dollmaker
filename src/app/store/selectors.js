import { prop, propSatisfies, compose } from 'ramda'
import composeSelectedLook from '../utils/composeSelectedLook'

const getLooks = prop('looks')
const getWardrobe = prop('wardrobe')
const getSelectedParts = prop('doll')
const getLoadingQueue = prop('loading')

const getCurrentLook = (state) => (
  composeSelectedLook(
    getLooks(state),
    getSelectedParts(state),
  )
)

const isLoading = compose(
  propSatisfies(
    (x) => x > 0,
    'length',
  ),
  getLoadingQueue,
)

export {
  getLooks,
  getWardrobe,
  getSelectedParts,
  getCurrentLook,
  isLoading,
}
