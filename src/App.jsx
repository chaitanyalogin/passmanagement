import React from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'

const App = () => {
  return (
    <div>
   <Navbar/>
   <div className='p-1'>
   <Manager/>
   </div>
   </div>
  )
}

export default App
