import { combineReducers } from 'redux'
import { partial } from 'ramda'

import getRandomItem from '../utils/getRandomItem'
import looks from './looks'
import * as actions from './actions'

const initialDollState = {
  accessories: undefined,
  top: undefined,
  bottom: undefined,
  hat: undefined,
  hair: undefined,
  shoes: undefined,
  sparkle: undefined,
}

const lookNames = Object.keys(looks)
const partNames = Object.keys(initialDollState)

const getRandomLook = partial(getRandomItem, [lookNames])

const looksReducer = () => looks

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
      return partNames.reduce(
        (newParts, nextPart) => ({
          ...newParts,
          [nextPart]: getRandomLook(),
        }), {}
      )
    default:
      return state
  }
}

export default combineReducers({
  looks: looksReducer,
  doll: dollReducer,
})
