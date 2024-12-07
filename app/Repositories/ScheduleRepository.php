<?php

namespace App\Repositories;

use App\Models\Schedule;

class ScheduleRepository
{
    public static function getSchedules()
    {
        $query = Schedule::get();
        return $query;
    }

    public static function getSchedulesDashboard($search)
    {
        $query = Schedule::with('details')->when($search, function ($query, $search) {
            $query->where('title', 'like', "%{$search}%")
                ->orWhere('location', 'like', "%{$search}%");
        })->orderBy('id', 'desc')
            ->get();

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
        $schedule = Schedule::where('id', $id)->first();
        return $schedule->update($data);
    }

    public static function deleteSchedule($id)
    {
        $query = Schedule::where('slug', $id)->delete();
        return $query;
    }
}
