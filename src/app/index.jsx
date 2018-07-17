import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'

import Title from './components/Title'
import Doll from './components/Doll'
import Wardrobe from './components/Wardrobe'

const LookMaker = () => (
  <Provider store={configureStore()}>
    <main className="c-lookmaker">
      <div className="c-lookmaker__controls">
        <section className="c-lookmaker__doll c-doll-wrapper">
          <Title />
          <Doll />
        </section>

        <nav className="c-lookmaker__wardrobe c-wardrobe-wrapper">
          <Wardrobe />
        </nav>
      </div>
    </main>
  </Provider>
)

export default LookMaker
