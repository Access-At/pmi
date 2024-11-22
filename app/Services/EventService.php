<?php

namespace App\Services;

use App\Http\Resources\EventResource;
use App\Repositories\EventRepository;
use Illuminate\Support\Facades\Storage;

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
        $imageName = null;

        if (isset($data['image'])) {
            $imageName = self::handleImageUpload($data['image']);
            $data['image'] = $imageName;
        }

        return new EventResource(EventRepository::createEvent($data));
    }

    public static function updateEvent($slug, $data)
    {
        $event = EventRepository::getEventsBySlug($slug);

        if (isset($data['image'])) {
            if ($event->image) {
                Storage::disk('public')->delete('events/' . $event->image);
            }
            $imageName = self::handleImageUpload($data['image']);
            $data['image'] = $imageName;
        }

        return new EventResource(EventRepository::updateEvent($slug, $data));
    }

    public static function deleteEvent($slug)
    {
        return EventRepository::deleteEvent($slug);
    }

    private static function handleImageUpload($image): string
    {
        $imageName = uniqid() . '_' . time() . '.' . $image->extension();
        Storage::disk('public')->putFileAs('events', $image, $imageName);
        return $imageName;
    }
}
