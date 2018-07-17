import React from 'react'
import { render } from 'react-dom'

import LookMaker from './app'
import preloader from './preloader'

import './scss/preloader.scss'
import './scss/lookmaker.scss'

render(
  <LookMaker />,
  document.getElementById('✨'),
  preloader,
)
