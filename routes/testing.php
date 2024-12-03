<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ScheduleController;
use Illuminate\Support\Facades\Route;


Route::prefix('events')->group(function () {
    Route::get('/', [EventController::class, 'getEvents'])->name('events');
    Route::get('/{id}', [EventController::class, 'getEventsById'])->name('events.id');
    Route::post('/', [EventController::class, 'createEvent'])->name('events.create');
    Route::put('/{id}', [EventController::class, 'updateEvent'])->name('events.update');
    Route::delete('/{id}', [EventController::class, 'deleteEvent'])->name('events.delete');
});

Route::prefix('schedule')->group(function () {
    Route::get('/', [ScheduleController::class, 'getSchedules'])->name('schedule');
    Route::get('/{id}', [ScheduleController::class, 'getSchedulesById'])->name('schedule.id');
    Route::post('/', [ScheduleController::class, 'createSchedule'])->name('schedule.create');
    Route::put('/{id}', [ScheduleController::class, 'updateSchedule'])->name('schedule.update');
    Route::delete('/{id}', [ScheduleController::class, 'deleteSchedule'])->name('schedule.delete');
});


Route::prefix('/notif_coba')->group(function () {
    Route::post('/', [NotificationController::class, 'saveNotification'])->name('notif.save');
    Route::delete('/{id}', [NotificationController::class, 'removeNotification'])->name('notif.remove');

    Route::get('/acitivy', [NotificationController::class, 'getActivities'])->name('notif.activity');
});
