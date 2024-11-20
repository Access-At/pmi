<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Schedule extends Model
{
    protected $guarded = [];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($data) {
            $slug = Str::slug($data->title);

            if (static::where('slug', $slug)->exists()) {
                throw new \Exception('Schedule with this title already exists');
            }

            $data->slug = $slug;
        });
    }

    public function details()
    {
        return $this->hasManyThrough(StockDetail::class, ScheduleDetail::class, 'schedule_id', 'id', 'id', 'stock_detail_id');
    }
}
