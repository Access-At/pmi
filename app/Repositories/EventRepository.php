<?php

namespace App\Repositories;

use App\Models\Event;
use App\Models\Notification;

class EventRepository
{
  public static function getEvents()
  {
    $query = Event::orderBy('created_at', 'desc')->where('date', '>=', now())->get();
    return $query;
  }

  public static function getEventsDashboard($search)
  {
    $query = Event::query()
      ->when($search, function ($query, $search) {
        $query->where('title', 'like', "%{$search}%")
          ->orWhere('location', 'like', "%{$search}%");
      })->orderBy('id', 'desc')->get();
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

  public static function updateEvent($slug, $data)
  {
    $event = Event::where('slug', $slug)->first();
    $event->update($data);

    return $event;
  }

  public static function deleteEvent($slug)
  {
    $query = Event::where('slug', $slug)->delete();
    return $query;
  }
}
