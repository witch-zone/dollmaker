import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'

import Title from './components/Title'
import Doll from './components/Doll'
import Wardrobe from './components/Wardrobe'

const LookMaker = () => (
  <Provider store={configureStore()}>
    <main
      style={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <section
        style={{
          position: 'sticky',
          zIndex: 1,
        }}
      >
        <Title />
        <Doll />
      </section>

      <nav
        style={{
          zIndex: 2,
        }}
      >
        <Wardrobe />
      </nav>
    </main>
  </Provider>
)

export default LookMaker
