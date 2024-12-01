<?php

namespace App\Http\Controllers;

use App\Services\NotificationService;
use Illuminate\Http\Request;
use Illuminate\Notifications\Events\NotificationSent;
use Inertia\Inertia;

class NotificationController extends Controller
{
  public function saveNotification(Request $request)
  {
    $event = $request->input();
    return NotificationService::saveNotification($event);
  }

  public function removeNotification($event)
  {
    return NotificationService::removeNotification($event);
  }
}
