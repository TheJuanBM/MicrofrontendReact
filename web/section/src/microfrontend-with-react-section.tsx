import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

import { SectionApp as rootComponent } from './app'
import './i18n'

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOM,
  rootComponent,
  errorBoundary: () => null
})
