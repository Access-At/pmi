<?php

namespace App\Services;

use App\Http\Resources\ActivityResource;
use App\Http\Resources\NotificationResource;
use App\Repositories\ActivityRepository;
use App\Repositories\EventRepository;

class ActivityService
{
    public static function getNotifications()
    {
        return NotificationResource::collection(ActivityRepository::getNotifications());
    }

    public static function getActivities()
    {
        return ActivityResource::collection(ActivityRepository::getActivities());
    }

    public static function getActifityDashboard()
    {
        return ActivityRepository::getActifityDashboard();
    }

    public static function saveActifity($data)
    {
        $event = EventRepository::getEventsBySlug($data);
        return ActivityRepository::saveActifity($event->id);
    }

    public static function removeActifity($data)
    {
        $event = EventService::getEventsBySlug($data);
        return ActivityRepository::removeActifity($event->id);
    }
}
