<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'room_type',
        'price_per_night',
        'description',
        'breakfast',
        'status',
    ];

    protected $enum = [
        'room_type' => ['Standard', 'Suite king size bed', 'double', 'familiar'],
        'breakfast' => ['included', 'not_included'],
        'status' => ['available', 'not_available'],
    ];
}
