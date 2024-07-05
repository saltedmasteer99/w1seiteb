import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './about/About'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
)
