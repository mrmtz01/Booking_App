<?php

use App\Http\Controllers\ControllerBooking;
use App\Http\Controllers\ControllerGuest;
use App\Http\Controllers\ControllerRoom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route:: get('/guests', [ControllerGuest:: class, 'index']);
Route::post('/guests',[ControllerGuest::class, 'store']);
Route::put('/guests/{id}',[ControllerGuest::class, 'update']);

Route:: get('/rooms', [ControllerRoom:: class, 'index']);
Route::post('/rooms',[ControllerRoom::class, 'store']);
Route::put('/rooms/{id}',[ControllerRoom::class, 'update']);

Route:: get('/bookings', [ControllerBooking:: class, 'index']);
Route::post('/bookings',[ControllerBooking::class, 'store']);
Route::put('/bookings/{id}',[ControllerBooking::class, 'update']);
