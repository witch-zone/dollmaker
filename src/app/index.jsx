import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'

import Mirror from './components/Mirror'
import Wardrobe from './components/Wardrobe'
import Controls from './components/Controls'

import logo from '../assets/logo.png'

const LookMaker = () => (
  <Provider store={configureStore()}>
    <main className="c-lookmaker">
      <img
        src={logo}
        className="c-lookmaker__logo"
        role="presentation"
        alt="the witch zone LookMaker!"
      />

      <div className="c-lookmaker__furniture c-lookmaker__doll">
        <Mirror className="c-lookmaker__controls" />
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
