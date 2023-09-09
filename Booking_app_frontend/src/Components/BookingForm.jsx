
import react, {useState} from 'react'

const BookingForm = () => {

  const [formData, setFormData] = useState({
    guest_id: '',
    room_id: '',
    check_in: '',
    check_out: '',
    status: '',
    payment_type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al crear la reserva');
      }

      // Limpiar el formulario después de una reserva exitosa
      setFormData({
        guest_id: '',
        room_id: '',
        check_in: '',
        check_out: '',
        status: '',
        payment_type: '',
      });

      alert('Reserva creada exitosamente.');
    } catch (error) {
      console.error('Error al crear la reserva:', error);
    }
  };

  return (
    <>
      <div className='container bg-gray-200 rounded-xl'>

    <div className="max-w-md mx-auto bg-gray-40 rounded-xl shadow-md overflow-hidden md:max-w-2xl justify-center items-center">
      <div className="md:flex">
        <div className='p-8 w-full'>
          <div className="uppercase tracking-wide text-xl font-semibold mb-1 text-center text-black">
             Make a new booking
          </div>

      <form onSubmit={handleSubmit} className="justify-center items-center">
        <div className="mb-4">
          <label htmlFor="guest_id" className="block text-gray-600">Guest ID:</label>
          <input
            type="text"
            id="guest_id"
            name="guest_id"
            value={formData.guest_id}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="room_id" className="block text-gray-600">Room ID:</label>
          <input
            type="text"
            id="room_id"
            name="room_id"
            value={formData.room_id}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="check_in" className="block text-gray-600">Date of Check-In:</label>
          <input
            type="date"
            id="check_in"
            name="check_in"
            value={formData.check_in}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="check_out" className="block text-gray-600">Date of Check-Out:</label>
          <input
            type="date"
            id="check_out"
            name="check_out"
            value={formData.check_out}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-600">Status:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          >
            <option value="">Select status</option>
            <option value="confirmed">Confirmed</option>
            <option value="canceled">Cancelled</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="payment_type" className="block text-gray-600">Payment type:</label>
          <select
            id="payment_type"
            name="payment_type"
            value={formData.payment_type}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          >
            <option value="">Select payment type</option>
            <option value="cash">Cash</option>
            <option value="credit_card">Credit-card</option>
          </select>
        </div>
        <button className='bg-black hover:bg-cyan-800 text-white font-bold py-2 px-3 rounded m-3 w-full focus:outline-none focus:shadow-outline' type='submit'>
          <i class="fa-solid fa-magnifying-glass fa-beat"></i>
        </button>
      </form>
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

{/* //     <div className="max-w-md mx-auto bg-gray-40 rounded-xl shadow-md overflow-hidden md:max-w-2xl justify-center items-center">
//       <div className="md:flex">
//         <div className='p-8 w-full'>
//           <div className="uppercase tracking-wide text-xl font-semibold mb-1 text-center text-black">
//             Make a new booking
//           </div>
//           <form action="">
//             <input placeholder='Age' type="date" name="" id="" className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
//             <input placeholder='Number of guests' type="number" name="" id="" className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
//             <select placeholder='Type of room'name="Type of room" id="" className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
//               <option value="" disabled selected>Type of room</option>
//               <option value="opcion1">Suite 1 King Size bed</option>
//               <option value="opcion2">Double 2 Queen beds</option>
//               <option value="opcion3">Single Room</option>
//               <option value="opcion4">Family Room</option>
//             </select>
//             <input placeholder='Number of rooms' type="number" name="" id="" className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
//             <button className='bg-black hover:bg-cyan-800 text-white font-bold py-2 px-3 rounded m-3 w-full focus:outline-none focus:shadow-outline' type='submit'>
//               <i class="fa-solid fa-magnifying-glass fa-beat"></i>
//             </button>

//           </form>
//         </div>
//       </div>
//     </div>

//   )
// } */}

export default BookingForm
