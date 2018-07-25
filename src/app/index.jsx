import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'

import Mirror from './components/Mirror'
import Wardrobe from './components/Wardrobe'

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
          <Wardrobe className="c-lookmaker__controls" />
        </div>
      </div>
    </main>
  </Provider>
)

export default LookMaker
