<?php

namespace App\Services;

use App\Http\Resources\EventResource;
use App\Models\Event;
use App\Repositories\EventRepository;

class EventService
{
    public static function getEvents()
    {
        return EventResource::collection(EventRepository::getEvents());
    }

    public static function getEventsBySlug($slug)
    {
        return new EventResource(EventRepository::getEventsBySlug($slug));
    }

    public static function createEvent($data)
    {
        return new EventResource(EventRepository::createEvent($data));
    }

    public static function updateEvent($slug, $data)
    {

        return new EventResource(EventRepository::updateEvent($slug, $data));
    }

    public static function deleteEvent($slug)
    {
        return EventRepository::deleteEvent($slug);
    }
}
