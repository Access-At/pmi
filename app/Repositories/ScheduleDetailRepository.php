<?php

namespace App\Repositories;

use App\Models\ScheduleDetail;

class ScheduleDetailRepository
{
    public static function createScheduleDetail($data)
    {
        $scheduleDetail = ScheduleDetail::create($data);
        return $scheduleDetail;
    }

    public static function deleteScheduleDetail($id)
    {
        $scheduleDetail = ScheduleDetail::where('schedule_id', $id)->delete();
        return $scheduleDetail;
    }

    public static function getScheduleDetail($id)
    {
        $scheduleDetail = ScheduleDetail::where('schedule_id', $id)->get();
        return $scheduleDetail;
    }
}
