import { combineReducers } from 'redux'
import looks from './looks'

const initialDollState = {
  accessories: undefined,
  top: undefined,
  bottom: undefined,
  hat: undefined,
  hair: undefined,
  shoes: undefined,
  sparkle: undefined,
}

const looksReducer = () => looks

const dollReducer = (
  state = initialDollState,
  { type, payload },
) => {
  switch (type) {
    default:
      return state
  }
}

export default combineReducers({
  looks: looksReducer,
  doll: dollReducer,
})
