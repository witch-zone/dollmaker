import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'

import Title from './components/Title'
import Doll from './components/Doll'
import Wardrobe from './components/Wardrobe'

const LookMaker = () => (
  <Provider store={configureStore()}>
    <main className="c-lookmaker">
      <div className="c-lookmaker__furniture c-lookmaker__doll">
        <section className="c-lookmaker__controls c-doll-wrapper">
          <Title />
          <Doll />
        </section>
      </div>

      <div className="c-lookmaker__furniture c-lookmaker__wardrobe">
        <nav className="c-lookmaker__controls c-wardrobe-wrapper">
          <Wardrobe />
        </nav>
      </div>
    </main>
  </Provider>
)

export default LookMaker
