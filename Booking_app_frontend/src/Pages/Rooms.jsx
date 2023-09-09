import React, { useState } from 'react';
import NavBar from '../Components/NavBar';

const Rooms = () => {
  const [formData, setFormData] = useState({
    room_type: '',
    price_per_night: '',
    description: '',
    breakfast: '',
    status: '',
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
      const response = await fetch('http://localhost:8000/api/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al agregar la habitación');
      }

      // Limpiar el formulario después de agregar la habitación
      setFormData({
        room_type: '',
        price_per_night: '',
        description: '',
        breakfast: '',
        status: '',
      });

      alert('Habitación agregada exitosamente.');
    } catch (error) {
      console.error('Error al agregar la habitación:', error);
    }
  };

  return (

    <>
    <NavBar/>
    <div className="max-w-md mx-auto p-4">
      <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-4">Add Room</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="room_type" className="block text-gray-600">Room type:</label>
              <select
                id="room_type"
                name="room_type"
                value={formData.room_type}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3"
                required
              >
                <option value="">Select a room type</option>
                <option value="Standard">Standard</option>
                <option value="Suite king size bed">Suite king size bed</option>
                <option value="double">Doble</option>
                <option value="familiar">Familiar</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="price_per_night" className="block text-gray-600">Price per night:</label>
              <input
                type="number"
                id="price_per_night"
                name="price_per_night"
                value={formData.price_per_night}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3"
                step="0.01"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-600">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="breakfast" className="block text-gray-600">Breakfast:</label>
              <select
                id="breakfast"
                name="breakfast"
                value={formData.breakfast}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3"
                required
              >
                <option value="">Select breakfast type</option>
                <option value="included">Included</option>
                <option value="not_included">Not included</option>
              </select>
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
                <option value="available">Available</option>
                <option value="not_available">Unavailable</option>
              </select>
            </div>
            <button className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-3 rounded m-3 w-full focus:outline-none focus:shadow-outline' type='submit'>
              Add room
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Rooms;
