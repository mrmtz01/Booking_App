import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Carousel from "../Components/Carousel";
import { useEffect, useState } from "react";
import { useCallback } from "react";
const API_URL = "http://localhost:8000/api";

const MyBookings = () => {

  const [bookings, setBookings] = useState([]);
  const [guests, setGuests] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [cancellationStatus, setCancellationStatus] = useState([])

  useEffect(() => {
    // carga de datos desde la api
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/bookings`);
      const data = await response.json();
      
      const cancellationStatusMap = {};
      data.forEach((booking) => {
        cancellationStatusMap[booking.id] = booking.status === "canceled";
      });

      setCancellationStatus(cancellationStatusMap);
      
      setBookings(data);
    };
    const fetchRooms = async () => {
      const response = await fetch(`${API_URL}/rooms`);
      const data = await response.json();
      setRooms(data);
    };
    const fetchGuests = async () => {
      const response = await fetch(`${API_URL}/guests`);
      const data = await response.json();
      setGuests(data);
    };
    fetchGuests();
    fetchRooms();
    fetchData();
  }, []);

  const handleCancelBooking = useCallback(
    async (bookingId) => {
      // Actualiza el estado de la reserva a "cancelled"
      setCancellationStatus((prevStatus) => ({
        ...prevStatus,
        [bookingId]: true,
      }));

      // Realiza una solicitud DELETE al servidor para cancelar la reserva
      try {
        const response = await fetch(`${API_URL}/booking/${bookingId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "canceled" }),
        });

        if (!response.ok) {
          throw new Error("Error al cancelar la reserva");
        }

        // Actualiza la lista de reservas después de la cancelación exitosa
        const updatedBookings = bookings.map((booking) => {
          if (booking.id === bookingId) {
            return { ...booking, status: "canceled" };
          }
          return booking;
        });

        setBookings(updatedBookings);
      } catch (error) {
        console.error("Error al cancelar la reserva:", error);
      }
    },

  );

  return (
    <>
      <NavBar />
      <h1 className="font-mono text-xl box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ... p-1 col-2 w-full bg-black text-white flex justify-content-center items-center ">
        MY BOOKINGS
      </h1>
      <h1 className="text-2xl font-semibold italic text-center text-slate-900 p-1 mt-1">
        HELLO, MR. CUSTUMER. Here you will be able to check the list of the
        booked rooms by you.
      </h1>
      <div>
        <h2>User profile</h2>
        <p>Loading...</p>
      </div>
      <div className=" mx-4 my-4 justify-content-center m-2 border-4 border-indigo-200 border-x-indigo-500">
        <div className="row justify-content-center m-2 p-3 flex space-x-3">
          <h3 className="p-1 text-center mt-2 col-1  border-4 border-indigo-200 border-y-indigo-500">
            Room type
          </h3>
          <h3 className="p-1 text-center mt-2 col-2 border-4 border-indigo-200 border-y-indigo-500">
            Name of the guest
          </h3>
          <h3 className="p-1 text-center mt-2 col-2 border-4 border-indigo-200 border-y-indigo-500">
            Check In
          </h3>
          <h3 className="p-1 text-center mt-2 col-2 border-4 border-indigo-200 border-y-indigo-500">
            Check Out
          </h3>
          <h3 className="p-1 text-center mt-2 col-2 border-4 border-indigo-200 border-y-indigo-500">
            Status
          </h3>
          <h3 className="p-1 text-center mt-2 col-2 border-4 border-indigo-200 border-y-indigo-500">
            Payment method
          </h3>
        </div>
        <div className="p-3 row ">
          {bookings.map((item) => {
            const isCancelled = cancellationStatus[item.id];
            return (
              <div
                className="justify-content-center row mt-2 lex space-x-3"
                key={item.id}
              >
                <label className="col-1 p-1">
                  {
                    rooms.filter((room) => room.id === item.room_id)[0]
                      .room_type
                  }
                </label>
                <label className="col-2 p-1">
                  {
                    guests.filter((guest) => guest.id === item.guest_id)[0]
                      .first_name
                  }
                  &nbsp;
                  {
                    guests.filter((guest) => guest.id === item.guest_id)[0]
                      .last_name
                  }
                </label>
                <label className="col-2 p-1">{item.check_in}</label>
                <label className="col-2 p-1">{item.check_out}</label>
                <label className="col-2 p-1">{item.status.toUpperCase()}</label>
                <label className="col-1 p-1">
                  {item.payment_type.toUpperCase()}
                </label>
                <button 
                  className="col-1 p-1 rounded text-white"
                  onClick={() => handleCancelBooking(item.id)}
                  disabled={isCancelled}
                  style={{  background: isCancelled ? "gray" : "black",
                            cursor: isCancelled ? "not-allowed" : "pointer",}}
                >
                  {isCancelled ? "Cancelled" : "Cancel"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <blockquote className="text-2xl font-semibold italic text-center text-slate-900 p-1">
        Are you interested in
        <span className="m-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span className="relative text-white">Booking</span>
        </span>
        a new room?
      </blockquote>
      <Carousel />
      <Footer />
    </>
  );
};

export default MyBookings;
