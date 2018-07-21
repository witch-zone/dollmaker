import React from 'react'
import { render } from 'react-dom'

import Preloader from './Preloader'
import LookMaker from './app'

import './scss/preloader.scss'
import './scss/lookmaker.scss'

render(
  <Preloader>
    <LookMaker />
  </Preloader>,
  document.getElementById('✨'),
)
