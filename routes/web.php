<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ScheduleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::prefix('/')->group(function () {
  Route::get('', [HomeController::class, "index"])->name("home");
  Route::get('terms-and-conditions', [HomeController::class, "termsAndConditions"])->name("terms");
  Route::get('privacy-policy', [HomeController::class, "privacyPolicy"])->name("privacy");
  Route::get('jadwal-donor', [HomeController::class, "jadwalDonor"])->name("jadwal");
  Route::get("event/{slug}", [HomeController::class, "event"])->name("event");
  Route::get('stok-darah', [HomeController::class, "daftarPMI"])->name("pmi");
  Route::get('stok-darah/{slug}', [HomeController::class, "stokDarah"])->name("stok");
});

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile/{id}', [ProfileController::class, 'show'])->name("profile");
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

Route::prefix('schedule')->group(function () {
  Route::get('/', [ScheduleController::class, 'getSchedules'])->name('schedule');
  Route::get('/{id}', [ScheduleController::class, 'getSchedulesById'])->name('schedule.id');
  Route::post('/', [ScheduleController::class, 'createSchedule'])->name('schedule.create');
  Route::put('/{id}', [ScheduleController::class, 'updateSchedule'])->name('schedule.update');
  Route::delete('/{id}', [ScheduleController::class, 'deleteSchedule'])->name('schedule.delete');
});

require __DIR__ . '/auth.php';
