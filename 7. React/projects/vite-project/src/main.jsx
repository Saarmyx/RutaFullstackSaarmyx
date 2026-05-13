import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const root = ReactDom.createRoot(document.getElementById('root'))

const createButton = ({ text }) => {
  return <button>{text}</button>
}

root.render(<App />)
