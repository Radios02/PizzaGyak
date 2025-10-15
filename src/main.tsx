import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import PizzaPage from "./pages/PizzaPage.tsx";
import 404 from "./pages/404.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/pizzak/:id' element={<PizzaPage />}/>
        <Route path='/404' element={<404 />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
