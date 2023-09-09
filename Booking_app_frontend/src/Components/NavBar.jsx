import { Link } from "react-router-dom"
//import { Modal } from "./modal"
import { useState } from "react"

const NavBar = () => {

  return (
    <>
        <div className='w-full bg-black text-white flex justify-between items-center px-2'>
            <p className="bg-black">When was the last time you get awesome?</p>
            <div className='flex' >
                <p className='px-2 bg-black' >Contact us for more information:</p>
                <p className='px-2 bg-black' ><i className="fa-solid fa-phone bg-black"></i> +503 9876 1234</p>
                <p className='px-2 bg-black' ><i className="fa-solid fa-envelope bg-black"></i> info@surfsivarlodge.com</p>
            </div>
        </div>

        <nav className='w-full bg-white text-white text-center relative'>
            <div className='flex justify-between items-center px-4 py-4'>
                
                <Link to="/" className='text-black hover:text-yellow-500 px-4 uppercase' ><img src="/public/Resources/Logo.png" alt="Logo" /></Link>
                <ul className='flex'>
                    <li>
                        <Link to="/" className='text-black hover:text-yellow-500 px-4 uppercase' >HOME</Link>
                    </li>   
                    <li>
                        <Link to="/surftrips" className='text-black hover:text-yellow-500 px-4 uppercase' >surf trips</Link>
                    </li>
                    <li>
                        <Link to="/mybookings" className='text-black hover:text-yellow-500 px-4 uppercase' >My bookings</Link>
                    </li>
                    <li>
                        <Link to="/aboutus" className='text-black hover:text-yellow-500 px-4 uppercase' >ABOUT US</Link>
                    </li>
                    <li>
                        <Link to="/guests" className='text-black hover:text-yellow-500 px-4 uppercase' >Add a guest</Link>
                    </li>
                    <li>
                        <Link to="/rooms" className='text-black hover:text-yellow-500 px-4 uppercase' >Add a room</Link>
                    </li>
                </ul>
                <Link to="/booknow">
                <button type='submit' className='bg-black text-white hover:bg-zinc-900 hover:text-white font-bold py-3 px-5 rounded animate-bounce'>BOOK NOW</button>
                </Link>
            </div>
        </nav>
    </>
  )
}

export default NavBar