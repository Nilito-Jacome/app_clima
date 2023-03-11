import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { load } from './components/load'

window.addEventListener('load', function () {
  load()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
