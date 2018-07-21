import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'

import Title from './components/Title'
import Doll from './components/Doll'
import Wardrobe from './components/Wardrobe'
import Controls from './components/Controls'

const LookMaker = () => (
  <Provider store={configureStore()}>
    <main className="c-lookmaker">
      <div className="c-lookmaker__furniture c-lookmaker__doll">
        <section className="c-lookmaker__controls c-doll-wrapper">
          <Title className="c-doll-wrapper__title" />
          <Doll className="c-doll-wrapper__doll" />
        </section>
      </div>

      <input
        id="drawer-input"
        className="c-lookmaker__toggle c-drawer__input"
        type="checkbox"
      />

      <label
        id="drawer-toggle"
        htmlFor="drawer-input"
        className="c-drawer__toggle"
      />

      <div className="c-drawer__wrapper">
        <div className="c-lookmaker__furniture c-lookmaker__wardrobe">
          <nav className="c-lookmaker__controls c-wardrobe-wrapper">
            <Wardrobe className="c-wardrobe-wrapper__wardrobe" />
            <Controls className="c-wardrobe-wrapper__controls" />
          </nav>
        </div>
      </div>
    </main>
  </Provider>
)

export default LookMaker
