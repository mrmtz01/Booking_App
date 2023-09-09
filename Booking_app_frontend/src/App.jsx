import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import BookingPage from "./Pages/BookingPage";
import MyBookings from "./Pages/MyBookings";
import BookNow from "./Pages/BookNow";
import AboutUsPage from "./Pages/AboutUsPage";
import SurfTripsPages from "./Pages/SurfTripsPages";
import BookNowConfirm from "./Pages/BookNowConfirm";
import "./App.css";

import Guests from "./Pages/Guests";
import Rooms from "./Pages/Rooms";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/mybookings" element={<MyBookings />}></Route>
          <Route path="/booknow" element={<BookNow />}></Route>
          <Route path="/aboutus" element={<AboutUsPage />}></Route>
          <Route path="/surftrips" element={<SurfTripsPages />}></Route>
          <Route path="/booknowconfirm" element={<BookNowConfirm />}></Route>
          <Route path="/guests" element={<Guests />}></Route>
          <Route path="/rooms" element={<Rooms />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
