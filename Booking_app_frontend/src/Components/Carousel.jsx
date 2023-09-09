import { Link } from "react-router-dom"
//import { Modal } from "./modal"
import { useState } from "react"

const Carousel = () => {

  return (
    <>
        <div className="flex px-5 py-10">
          <div className=" justify-around w-1/2">
            <h3 className="font-sans text-3xl uppercase">Know about our</h3>
            <h1 className="font-sans text-7xl font-bold	">Rooms</h1>
                <Link to='/booknow'>
                <button type='submit' className='bg-black text-white hover:bg-zinc-900 hover:text-white font-bold py-3 px-5 rounded'>BOOK NOW</button>
                </Link>
        </div>

        <div className="w-1/2">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>

        <div className="carousel-inner w-100">
          <div className="carousel-item active">
            <img src="/public/Resources/Rooms/Suite King size.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='uppercase text-5xl'>Suite King Size</h5>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/public/Resources/Rooms/Double 2 Queen.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='uppercase text-5xl'>Double 2 Queen</h5>
            </div>
          </div>

          <div className="carousel-item">
            <img src="../../public/Resources/Rooms/Single Room.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='uppercase text-5xl'>Single Room</h5>
            </div>
          </div>
          
          <div className="carousel-item">
            <img src="/public/Resources/Rooms/Family Room.jpg" className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='uppercase text-5xl'>Family Room</h5>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
          </div>
        </div>
    </div>

    </>
  )
}

export default Carousel