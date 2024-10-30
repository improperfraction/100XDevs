import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/ReduxStore.jsx'
import { Provider } from "react-redux"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrapping entire application with the Provider component from react-redux and pass the store to it */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
