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
        width: '66%',
        maxWidth: '30em',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <section
        style={{
          width: '60%',
          position: 'fixed',
          zIndex: 1,
        }}
      >
        <Title />
        <Doll />
      </section>

      <nav
        style={{
          position: 'relative',
          zIndex: 2,
          width: '40%',
          marginLeft: '60%',
        }}
      >
        <Wardrobe />
      </nav>
    </main>
  </Provider>
)

export default LookMaker
