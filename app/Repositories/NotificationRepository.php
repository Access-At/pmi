<?php

namespace App\Repositories;

use App\Models\Notification;
use Illuminate\Support\Facades\Auth;

class NotificationRepository
{
  public static function getNotifications()
  {
    $user = Auth::user()->id;
    $query = Notification::with([
      'event',
      'user'
    ])->where('user_id', '=', $user)->get();
    return $query;
  }

  public static function saveNotification($data)
  {
    $query = Notification::create($data);
    return $query;
  }

  public static function removeNotification($id)
  {
    $query = Notification::where([
      'user_id' => Auth::user()->id,
      'event_id' => $id,
    ])->delete();

    return $query;
  }
}
