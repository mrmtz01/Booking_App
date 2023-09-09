<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('guest_id'); // FK a la tabla de huéspedes
            $table->unsignedBigInteger('room_id'); // FK a la tabla de habitaciones
            $table->date('check_in');
            $table->date('check_out');
            $table->enum('status', ['confirmed', 'canceled']);
            $table->enum('payment_type', ['cash', 'credit_card']);
            //FK of guests and rooms
            $table->foreign('guest_id')->references('id')->on('guests');
            $table->foreign('room_id')->references('id')->on('rooms');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookings');
    }
};
