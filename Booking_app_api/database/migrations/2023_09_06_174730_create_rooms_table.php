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
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->enum('room_type', ['Standard', 'Suite king size bed', 'double', 'familiar']);
            $table->decimal('price_per_night', 8, 2);
            $table->text('description')->nullable();
            $table->enum('breakfast', ['included', 'not_included']);
            $table->enum('status', ['available', 'not_available']);
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
        Schema::dropIfExists('rooms');
    }
};
