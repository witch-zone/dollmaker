import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'

const LookMaker = () => (
  <Provider store={configureStore()}>
    <div>
      hi :-)
    </div>
  </Provider>
)

export default LookMaker
