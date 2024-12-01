<?php

namespace App\Http\Controllers;

use App\Services\NotificationService;
use Illuminate\Http\Request;
use Illuminate\Notifications\Events\NotificationSent;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class NotificationController extends Controller
{
  public function saveNotification(Request $request)
  {
    $event = $request->input();
    NotificationService::saveNotification($event);
    return Redirect::back();
  }

  public function removeNotification($event)
  {
    return NotificationService::removeNotification($event);
  }
}
