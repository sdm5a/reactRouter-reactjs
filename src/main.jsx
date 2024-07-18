import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path="" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
