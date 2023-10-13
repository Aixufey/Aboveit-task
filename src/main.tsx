import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import APIContextProvider from './hooks/useApiContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </React.StrictMode>
)
