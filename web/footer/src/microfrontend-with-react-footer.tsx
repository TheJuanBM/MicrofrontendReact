import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

import { Footer as rootComponent } from './app'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent,
  errorBoundary: () => null
})

export const { bootstrap, mount, unmount } = lifecycles
