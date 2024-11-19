<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Services\EventService;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function getEvents()
    {
        $events = EventService::getEvents();
        return response()->json($events);
    }

    public function getEventsById(string $slug)
    {
        $event = EventService::getEventsBySlug($slug);
        return response()->json($event);
    }

    public function createEvent(EventRequest $request)
    {
        try {
            $event = EventService::createEvent($request->validated());
            return response()->json($event);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to create event',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function updateEvent(string $slug, EventRequest $request)
    {
        $event = EventService::updateEvent($slug, $request->validated());
        return response()->json($event);
    }

    public function deleteEvent(string $slug)
    {
        $event = EventService::deleteEvent($slug);
        return response()->json($event);
    }
}
