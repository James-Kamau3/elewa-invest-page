import React from 'react'
import '../App.css'


function Description() {
  return (
    <div>
      {/* Description Container */}
      <div className='description-container container flex flex-col pl-16 md:pl-16 md:max-w-fit'>
        <div className='different-text text-xs mt-24 md:mt-20'>
            <h1>How we see it differently</h1>
        </div>

        <div className='description-text mt-10 md:w-8/12 md:mt-10'>
            <p>
            The global South is rapidly catching up with the "developed" world. It's
            time for you to get to know the rapid development, innovation and drive
            going on in this part of the world (East-Africa, South Asia and beyond).
            </p>
        </div>
        <div>
            <img className='view-img mt-8 md:mt-16' src='https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png' alt='view'/>
        </div>
      </div>
    </div>
  )
}

export default Description
