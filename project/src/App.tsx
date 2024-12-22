import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HotelList } from './pages/HotelList';
import { SearchResults } from './pages/SearchResults';
import { HotelRooms } from './pages/HotelRooms';
import { ReservationForm } from './pages/ReservationForm';
import { PaymentMethod } from './pages/PaymentMethod';
import { BookingVoucher } from './pages/BookingVoucher';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HotelList />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/hotel/:hotelId/rooms" element={<HotelRooms />} />
              <Route path="/reservation" element={<ReservationForm />} />
              <Route path="/payment" element={<PaymentMethod />} />
              <Route path="/voucher" element={<BookingVoucher />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;