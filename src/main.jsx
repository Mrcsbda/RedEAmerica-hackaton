import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes/AppRouter.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { ThemeProvider } from "@mui/material"
import { theme } from './assets/theme/theme.js'
import "./assets/styles/universal.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ThemeProvider>
)
