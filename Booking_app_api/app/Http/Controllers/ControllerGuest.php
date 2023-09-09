<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Guest;

class ControllerGuest extends Controller
{
    // va a muestrar la lista de todos los huespedes en el system

    public function index(){
        $guests = Guest::all();
        return $guests;
    }

    // va almacenar un nuevo huesped al system
    public function store(Request $request){
        $guest = Guest::create($request->all());
        return  response()->json($guest,201);
}

// va a actualizar algunos detalles de los huespedes en el system
public function update(Request $request,string $id){ 
    
    $guest = Guest::findOrFail($id);
    $guest->update($request->all());
    return response()->json($guest,200);
}
}
