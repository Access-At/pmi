<?php

namespace App\Services;

use App\Http\Requests\ScheduleRequest;
use App\Http\Resources\NotificationResource;
use App\Http\Resources\ScheduleResource;
use App\Models\Notification;
use App\Repositories\EventRepository;
use App\Repositories\NotificationRepository;
use App\Repositories\ScheduleRepository;
use Illuminate\Support\Facades\Auth;

class NotificationService
{
  public static function getNotifications()
  {
    return NotificationResource::collection(NotificationRepository::getNotifications());
  }

  public static function saveNotification($slug)
  {
    // Implementasi penyimpanan notifikasi ke database
    $user = Auth::user()->id;
    $event = EventRepository::getEventsBySlug($slug);

    return new NotificationResource(NotificationRepository::saveNotification([
      'user_id' => $user,
      'event_id' => $event->id,
    ]));
  }

  public static function removeNotification($slug)
  {
    // Implementasi penghapusan notifikasi dari database
    $event = EventRepository::getEventsBySlug($slug);
    return NotificationRepository::removeNotification($event->id);
  }
}
