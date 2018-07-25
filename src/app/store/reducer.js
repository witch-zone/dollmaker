import { combineReducers } from 'redux'

import createWardrobeFromLooks from './utils/createWardrobeFromLooks'
import mapWardrobeToState from './utils/mapWardrobeToState'
import getRandomOutfit from './utils/getRandomOutfit'
import createExistingLooksFilter from './utils/createExistingLooksFilter'

import looks from './looks'
import * as actions from './actions'

const wardrobe = createWardrobeFromLooks(looks)
const wardrobeState = mapWardrobeToState(wardrobe)
const filterLooksByExisting = createExistingLooksFilter(wardrobe)

const looksReducer = () => looks
const wardrobeReducer = () => wardrobeState

const dollReducer = (
  state = {},
  { type, payload },
) => {
  switch (type) {
    case actions.SET_PARTS:
      return {
        ...state,
        ...filterLooksByExisting(payload, wardrobe),
      }
    case actions.RANDOMISE_PARTS:
      return {
        ...state,
        ...getRandomOutfit(wardrobe),
      }
    default:
      return state
  }
}

const loadingReducer = (
  state = [],
  { type, payload },
) => {
  switch (type) {
    case actions.SET_LOADING:
      return [
        ...state,
        payload,
      ]
    case actions.CLEAR_LOADING:
      return state.filter(
        (key) => key !== payload,
      )
    default:
      return state
  }
}

export default combineReducers({
  looks: looksReducer,
  wardrobe: wardrobeReducer,
  doll: dollReducer,
  loading: loadingReducer,
})
