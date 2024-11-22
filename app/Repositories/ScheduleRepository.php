<?php

namespace App\Repositories;

use App\Models\Schedule;

class ScheduleRepository
{
    public static function getSchedules()
    {
        $query = Schedule::take(3)->get();
        return $query;
    }

    public static function getSchedulesBySlug($slug)
    {
        $query = Schedule::with('details')
            ->where('slug', $slug)
            ->first();

        if (!$query || empty($query->details)) {
            return ['message' => 'No details available'];
        }

        return $query;
    }

    public static function createSchedule($data)
    {
        $query = Schedule::create($data);
        return $query;
    }

    public static function updateSchedule($id, $data)
    {
        $schedule = Schedule::where('slug', $id)->first();
        return $schedule->update($data);
    }

    public static function deleteSchedule($id)
    {
        $query = Schedule::where('slug', $id)->delete();
        return $query;
    }
}
