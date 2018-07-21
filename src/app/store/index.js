import {
  createStore, applyMiddleware, compose,
} from 'redux'

import reducer from './reducer'
import syncLookWithQueryString from './syncLookWithQueryString'

import * as actions from './actions'

const configureStore = () => {
  // eslint-disable-next-line
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const newStore = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(),
    ),
  )

  // ensure that dolls always have parts set
  // this prevents users from being shown anything (whispers) naky
  newStore.dispatch(actions.randomiseParts())

  syncLookWithQueryString(newStore)
  return newStore
}

export default configureStore
