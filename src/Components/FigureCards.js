import React from 'react'
import '../App.css'


function FigureCards() {
  return (
    <div>
                  {/* FigureCards container */}
            <div  className='figurecards-container grid grid-cols-2 md:grid md:grid-cols-4 md:mt-20 md:grid-flow-row'>

                  {/* Card for displaying the cards */}

                  {/* Card-1 */}
                  <div className='p-6 border-y border-black md:flex-row md:border-x md:pt-32 rounded-3xl'>
            <div className='figures font-bold' >
                <span className='figure'>1.3</span>
                <span className=''>M</span>
            </div>
            <div className='figure-text text-center'>
                <p>
                Approx. number of Kenyan talents reaching the age of 18 in 2022
                </p>
            </div>
            </div> 

                {/* Card-2 */}
            <div className='p-6 border-y border-black md:p-8 md:border-x md:pt-32 rounded-3xl'>
            <div className='figures font-bold' >
                <span className='figure'>5</span>
                <span className=''>M</span>
            </div>
            <div className='figure-text text-center'>
                <p>
                number of East-Africans(EAC) reaching the age of 18 in 2022                </p>
            </div>
            </div> 

                  {/* Card-3 */}
            <div className='p-6 border-y border-black md:p-8 md:border-x md:pt-32 rounded-3xl'>
            <div className='figures font-bold' >
                <span className='figure'>2022</span>
            </div>
            <div className='figure-text text-center'>
                <p>
                Democratic Republic of Congo joins the East African Community                </p>
            </div>
            </div> 

                  {/* Card-4 */}
            <div className='p-6 border-y border-black md:p-8 md:border-x md:pt-32 rounded-3xl'>
            <div className='figures font-bold' >
                <span className='figure'>1.5</span>
                <span className=''>M</span>
            </div>
            <div className='figure-text text-center'>
                <p>
                The number of unfilled IT vacancies in the US and EU markets                </p>
            </div>
            </div> 

                {/* Card-5 */}
            <div className='p-6 border-y border-black md:p-8 md:border-x md:pt-32 rounded-3xl'>
            <div className='figures font-bold' >
                <span className='figure'>10</span>
                <span className=''>M</span>
            </div>
            <div className='figure-text text-center'>
                <p>
                Number of technical vacancies by 2030                </p>
            </div>
            </div> 

                {/* Card-6 */}
            <div className='p-6 border-y border-black md:p-8 md:border-x md:pt-32 rounded-3xl'>
            <div className='figures font-bold' >
                <span className='figure'>2050</span>
            </div>
            <div className='figure-text text-center'>
                <p>
                Africa holds the worlds largest workforce                </p>
            </div>
            </div> 

                  {/* Card-7 */}
            <div className='p-6 border-y border-black md:p-8 md:border-x md:pt-32 rounded-3xl'>
            <div className='figures font-bold' >
                <span className='figure'>$4.6</span>
                <span className=''>M</span>
            </div>
            <div className='figure-text text-center'>
                <p>
                Startup funding raised by African startups in 2022                </p>
            </div>
            </div> 

            {/* Card-8 */}

            <div className='p-6 border-y border-black md:p-8 md:border-x md:pt-32 rounded-3xl'>
            <div className='figures' >
                <span className='figure'>310</span>
                <span className=''>%</span>
            </div>
            <div className='figure-text text-center'>
                <p>
                Increase in startup funding for companies with HQ in Kenya                </p>
            </div>
            </div> 
      </div>
    </div>
  )
}

export default FigureCards
