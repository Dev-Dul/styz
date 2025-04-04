import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './Components/Hero'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return(
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
