import React from 'react'
import ReactDOM from 'react-dom'
import App from '~/components/App'
import registerServiceWorker from './registerServiceWorker'
import './styles/stylesheet.css'

ReactDOM.render(<App />, document.querySelector('#root'))
registerServiceWorker()
