import React from 'react'

const BookingPage = () => {
  return (
    <>

      <main className="container mx-auto mt-8">

        <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center h-full" style={{color: 'black'}}>Make a reservation</h2>
            <form>
                <div className="grid grid-cols-2 gap-4">

                    <div className="col-span-1">
                        <label for="nombre" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="nombre" name="nombre" className="mt-1 p-2 w-full border rounded-md" required/>
                    </div>
                    <div className="col-span-1">
                        <label for="fecha-checkin" className="block text-sm font-medium text-gray-700">Date of check-in</label>
                        <input type="date" id="fecha-checkin" name="fecha-checkin" className="mt-1 p-2 w-full border rounded-md" required/>
                    </div>
                    <label for="habitacion" className="block text-sm font-medium text-gray-700">Room Type</label>
                        <select id="habitacion" name="habitacion" className="block text-sm font-medium text-gray-700">
                          <option value="individual">Single Room</option>
                          <option value="doble">Double 2 Queen</option>
                          <option value="suite">Suite King size</option>
                          <option value="familiar">Family Room</option>
                        </select>

                </div>

                <div className="mt-4">
                    <button type="submit" className="bg-black text-white px-4 py-2 rounded-md mt-4 font-bold">Reserve</button>
                </div>
            </form>
        </section>

      </main>

    </>
  )
}

export default BookingPage