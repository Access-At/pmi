<?php

namespace App\Http\Controllers;

use App\Services\NotificationService;
use Illuminate\Http\Request;
use Illuminate\Notifications\Events\NotificationSent;
use Inertia\Inertia;

class NotificationController extends Controller
{
  public static function getNotifications()
  {

    $data = NotificationService::getNotifications();
    return $data;
  }

  public function saveNotification($event)
  {
    // $event = $request->input('event');
    return NotificationService::saveNotification($event);
  }

  public function removeNotification($event)
  {
    return NotificationService::removeNotification($event);
  }
}
