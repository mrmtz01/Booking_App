import React from 'react'

const Amenities = () => {
  return (
    <>
    <div className='w-1/2 flex'>
    <div className='flex px-1'> 
          <p className='uppercase font-bold'>Surf Sivar Lodge</p>
          <div className='flex py-1 px-2'>
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star-half-stroke "></i>
          </div>
        </div>

        <div className='py-3'>
          <h1 className='pb-3'>Popular amenities:</h1>
          <div className='flex'>
            <div className='w-1/2'>
              <p> <i className="fa-solid fa-person-swimming"></i> Pool</p>
              <p> <i className="fa-solid fa-umbrella-beach"></i> Beach</p>
              <p> <i className="fa-solid fa-square-parking"></i> Free parking</p>
            </div>
            <div className='w-1/2 '>
            <p> <i className="fa-solid fa-mug-saucer"></i> Free breakfast</p>
              <p> <i className="fa-solid fa-wifi"></i> Free WiFi</p>
              <p> <i className="fa-solid fa-paw"></i> Pet friendly</p>
            </div>

          </div>
        </div>
    </div>
    
    <div className='w-1/2'>
          <h3 className="font-sans text-3xl uppercase">The perfect spot to</h3>
          <h1 className="font-sans text-7xl font-bold	">Get Ungrounded from Reality</h1>
          <h3 className="font-sans text-3xl uppercase">Live out your fantasy of being in a paradise spot.</h3>
          </div>
    
    
            
    </>
  )
}

export default Amenities
