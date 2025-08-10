import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar.jsx'
import ToDoList from './components/ToDoList.jsx'

function App() {

  return (
    <>
      <Navbar />
      

      <ToDoList />
    </>
  )
}

export default App
