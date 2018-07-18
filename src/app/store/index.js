import {
  createStore, applyMiddleware, compose,
} from 'redux'

import reducer from './reducer'
import syncLookWithQueryString from './syncLookWithQueryString'

const configureStore = () => {
  // eslint-disable-next-line
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const newStore = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(),
    ),
  )

  syncLookWithQueryString(newStore)
  return newStore
}

export default configureStore
