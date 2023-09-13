<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControllerBooking;
use App\Http\Controllers\ControllerRoom;
use App\Http\Controllers\ControllerGuest;

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

Route::get('/guests', [ControllerGuest::class, 'index'])->name('guest.index');
Route::post('/guests',[ControllerGuest::class, 'store'])->name('guest.post');
Route::put('/guests/{id}',[ControllerGuest::class, 'update'])->name('guest.put');

Route::get('/rooms', [ControllerRoom::class, 'index'])->name('rooms.index');
Route::post('/rooms',[ControllerRoom::class, 'store'])->name('rooms.post');
Route::put('/rooms/{id}',[ControllerRoom::class, 'update'])->name('rooms.put');
Route::delete('/room/{id}', [ControllerRoom::class, 'updateStatus'])->name('rooms.update');

Route::get('/bookings', [ControllerBooking::class, 'index'])->name('bookings.index');
Route::post('/bookings',[ControllerBooking::class, 'store'])->name('booking.post');
Route::put('/bookings/{id}',[ControllerBooking::class, 'update'])->name('booking.put');
Route::delete('/booking/{id}', [ControllerBooking::class, 'updateStatus'])->name('booking.update');