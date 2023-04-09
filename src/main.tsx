import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <App />
      </QueryClientProvider>
   </React.StrictMode>
)
