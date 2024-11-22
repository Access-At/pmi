<?php

namespace App\Models;

use App\Enums\BloodCategory;
use App\Enums\BloodType;
use Illuminate\Database\Eloquent\Model;

class StockDetail extends Model
{
    protected $guarded = [];

    protected $casts = [
        'blood_type' => 'string',
    ];

    protected function getBloodTypeAttribute($value)
    {
        return str_replace(['-', '+'], ['-min', '-plus'], $value);
    }
}
