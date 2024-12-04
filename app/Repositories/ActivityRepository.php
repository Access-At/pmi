<?php

namespace App\Repositories;

use App\Models\Activity;
use App\Models\Notification;
use Illuminate\Support\Facades\Auth;

class ActivityRepository
{
  public static function getNotifications()
  {
    $user = Auth::user()->id;

    $query = Activity::orderby("created_at", "desc")->with([
      'event',
      'user'
    ])->where('user_id', '=', $user)
      ->whereHas('event', function ($q) {
        $q->whereDate('date', '>=', now())->whereDate('date', '<=', now()->addDays(5));
      })
      ->get();

    return $query;
  }

  public static function getActivities()
  {
    $user = Auth::user()->id;

    $query = Activity::orderby("created_at", "desc")->with([
      'event',
      'user'
    ])->where('user_id', '=', $user)
      ->get();

    return $query;
  }

  public static function saveActifity($event)
  {
    $query = Activity::create([
      'user_id' => Auth::user()->id,
      'event_id' => $event
    ]);

    return $query;
  }

  public static function removeActifity($id)
  {
    $query = Activity::where([
      'user_id' => Auth::user()->id,
      'event_id' => $id,
    ])->delete();

    return $query;
  }

  // public static function getNotifications()
  // {
  //     $user = Auth::user()->id;

  //     $query = Activity::with([
  //         'event',
  //         'user'
  //     ])
  //         ->where('user_id', '=', $user)
  //         ->get();

  //     return $query;
  // }


  // public static function saveNotification($data)
  // {
  //     $query = Notification::create($data);
  //     return $query;
  // }

  // public static function removeNotification($id)
  // {
  //     $query = Activity::where([
  //         'user_id' => Auth::user()->id,
  //         'event_id' => $id,
  //     ])->delete();

  //     return $query;
  // }
}
