// import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <h1 className='text-6xl bg-rose-700 font-black text-center p-6'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
