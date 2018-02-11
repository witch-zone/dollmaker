import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'

import Title from './components/Title'

const LookMaker = () => (
  <Provider store={configureStore()}>
    <Title />
  </Provider>
)

export default LookMaker
