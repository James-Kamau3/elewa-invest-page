import React from 'react'
import '../App.css'
import FigureCards from './FigureCards'


function Figures() {
  return (
    <div>
            {/* Key figures container */}
        <div className='container flex flex-col'>
            {/* Key figures header */}
      <div className='figures-header mx-auto text-center md:mt-20 md:text-5xl'>
        <h3>Key figures</h3>
      </div>
      
        {/* Cards */}
        <FigureCards />
      </div>
    </div>
  )
}

export default Figures
