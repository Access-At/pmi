<?php

namespace App\Http\Controllers;

use App\Http\Requests\ScheduleRequest;
use App\Services\ScheduleService;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    public function getSchedules(Request $request)
    {
        $schedules = ScheduleService::getSchedulesDashboard($request->input('search'));
        return response()->json($schedules);
    }

    public function getSchedulesById(string $slug)
    {
        $schedule = ScheduleService::getSchedulesBySlug($slug);
        return response()->json($schedule);
    }

    public function createSchedule(ScheduleRequest $request)
    {
        $schedule = ScheduleService::createSchedule($request->validated());
        return response()->json($schedule);
    }

    public function updateSchedule(string $slug, ScheduleRequest $request)
    {
        $schedule = ScheduleService::updateSchedule($slug, $request->validated());
        return response()->json($schedule);
    }

    public function deleteSchedule(string $slug)
    {
        $schedule = ScheduleService::deleteSchedule($slug);
        return response()->json($schedule);
    }
}
