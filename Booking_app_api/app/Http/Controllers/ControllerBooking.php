<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;

class ControllerBooking extends Controller
{
    //mostrar la lista de todas las reservas
    public function index(){
        $bookings = Booking::all();
        return $bookings;
    }

    // validar la reserva de una room en la data base
    public function store(Request $request){
        $booking = Booking::create($request->all());
        return  response()->json($booking,201);
}

// va a actualizar el estado de las rooms en las bases de datos
public function update(Request $request,string $id){ 
    
    $booking = Booking::findOrFail($id);
    $booking->update($request->all());
    return response()->json($booking,200);
}
}
