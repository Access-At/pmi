<?php

namespace App\Models;

use App\Enums\BloodCategory;
use Illuminate\Database\Eloquent\Model;

class StockDetail extends Model
{
    protected $casts = [
        'blood_category' => BloodCategory::class,
    ];
}
