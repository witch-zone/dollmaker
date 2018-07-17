import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'

import Title from './components/Title'
import Doll from './components/Doll'
import Wardrobe from './components/Wardrobe'

const LookMaker = () => (
  <Provider store={configureStore()}>
    <main className="o-wardrobe-wrapper">
      <section>
        <Title />
        <Doll />
      </section>

      <nav>
        <Wardrobe />
      </nav>
    </main>
  </Provider>
)

export default LookMaker
