<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Event extends Model
{
    protected $dates = ['created_at', 'updated_at', 'date'];
    protected $guarded = [];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($data) {
            $slug = Str::slug($data->title);

            if (static::where('slug', $slug)->exists()) {
                throw new \Exception('Event with this title already exists');
            }

            $data->slug = $slug;
        });
    }
}
