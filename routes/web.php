<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('events')->group(function () {
    Route::get('/', [EventController::class, 'getEvents'])->name('events');
    Route::get('/{id}', [EventController::class, 'getEventsById'])->name('events.id');
    Route::post('/', [EventController::class, 'createEvent'])->name('events.create');
    Route::put('/{id}', [EventController::class, 'updateEvent'])->name('events.update');
    Route::delete('/{id}', [EventController::class, 'deleteEvent'])->name('events.delete');
});

require __DIR__ . '/auth.php';
