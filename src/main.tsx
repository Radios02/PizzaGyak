import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import PizzaPage from "./pages/PizzaPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/pizzak/:id' element={<PizzaPage />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
