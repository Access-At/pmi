<?php

namespace App\Repositories;

use App\Models\Event;
use App\Models\Notification;

class EventRepository
{
    public static function getEvents()
    {
        $query = Event::orderBy('date', 'asc')->where('date', '>=', now())->get();
        return $query;
    }

    public static function getEventsBySlug($slug)
    {
        $query = Event::where('slug', $slug)->first();
        return $query;
    }

    public static function getEventById($id)
    {
        $query = Event::find($id)->first();
        return $query;
    }

    public static function createEvent($data)
    {
        $query = Event::create($data);
        return $query;
    }

    public static function updateEvent($id, $data)
    {
        $event = Event::where('slug', $id)->first();
        $event->update($data);

        return $event;
    }

    public static function deleteEvent($id)
    {
        $query = Event::where('slug', $id)->delete();
        return $query;
    }
}
