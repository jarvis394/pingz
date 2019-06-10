// React
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'

// Components
import { Layout } from './components'

// Redux store
import store from './store'

// CSS
import "./styles/index.css"

ReactDOM.render(
  <Provider store={ store }>
    <Layout />
  </Provider>,
  document.getElementById("root")
)
