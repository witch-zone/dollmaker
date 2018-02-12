import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'

import Title from './components/Title'
import Wardrobe from './components/Wardrobe'

const LookMaker = () => (
  <Provider store={configureStore()}>
    <div>
      <Title />
      <Wardrobe />
    </div>
  </Provider>
)

export default LookMaker
