<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Services\ActivityService;
use App\Services\NotificationService;
use Illuminate\Http\Request;
use Illuminate\Notifications\Events\NotificationSent;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function saveNotification(Request $request)
    {
        $event = $request->get('event');
        ActivityService::saveActifity($event);
        return Redirect::back();
    }

    public function removeNotification($event)
    {
        return ActivityService::removeActifity($event);
    }
}
