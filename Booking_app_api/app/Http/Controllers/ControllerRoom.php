<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;

class ControllerRoom extends Controller
{
    //va a mostrar la lista de las habitaciones
    public function index(){
        $rooms = Room::all();
        return $rooms;
    }
   

    //va agregar nueva habitacion 
    public function store(Request $request){
    
        $room = Room::create($request->all());
        return response()->json($room,201);
    }

    // va a actualizar los datos de nueva habitacion
        public function update(Request $request,string $id){ 
    
            $room = Room::findOrFail($id);
            $room->update($request->all());
            return response()->json($room,200);
        }
        
}
