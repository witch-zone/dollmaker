import { combineReducers } from 'redux'
import { partial } from 'ramda'

import createWardrobeFromLooks from './utils/createWardrobeFromLooks'
import mapWardrobeToState from './utils/mapWardrobeToState'
import getRandomOutfit from './utils/getRandomOutfit'

import looks from './looks'
import * as actions from './actions'

const initialDollState = {}

const wardrobe = createWardrobeFromLooks(looks)
const wardrobeState = mapWardrobeToState(wardrobe)

const looksReducer = () => looks
const wardrobeReducer = () => wardrobeState

const dollReducer = (
  state = initialDollState,
  { type, payload },
) => {
  switch (type) {
    case actions.SET_PARTS:
      return {
        ...state,
        ...payload,
      }
    case actions.RANDOMISE_PARTS:
      return getRandomOutfit(wardrobe)
    default:
      return state
  }
}

export default combineReducers({
  looks: looksReducer,
  wardrobe: wardrobeReducer,
  doll: dollReducer,
})
