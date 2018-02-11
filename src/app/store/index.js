import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import reducer from './reducer'

const configureStore = () => {
  // eslint-disable-next-line
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(),
    ),
  )
}

export default configureStore
