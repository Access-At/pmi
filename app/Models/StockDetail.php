<?php

namespace App\Models;

use App\Enums\BloodCategory;
use App\Enums\BloodType;
use Illuminate\Database\Eloquent\Model;

class StockDetail extends Model
{
    protected $guarded = [];
    // protected $appends = ['blood_type_format'];

    protected $casts = [
        'blood_type' => 'string',
        'blood_type_format' => 'string',
    ];

    protected function getBloodTypeFormatAttribute($value)
    {
        // return str_replace(['-', '+'], ['-min', '-plus'], $value);
        return str_replace(['-', '+'], ['-min', '-plus'], $this->blood_type);
    }
}
