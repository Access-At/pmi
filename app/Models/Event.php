<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Models\Notification;

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

    public function notifications()
    {
        return $this->hasMany(Notification::class, 'event_id', 'id');
    }
}
