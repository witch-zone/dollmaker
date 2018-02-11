import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import LookMaker from './LookMaker'

render(
  <BrowserRouter>
    <LookMaker />
  </BrowserRouter>,
  document.getElementById('✨'),
)
