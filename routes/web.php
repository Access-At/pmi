<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NotificationController;
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
  Route::get("event/{slug}", [HomeController::class, "event"])->name("event.detail");
  Route::get('stok-darah', [HomeController::class, "daftarPMI"])->name("pmi");
  Route::get('stok-darah/{slug}', [HomeController::class, "stokDarah"])->name("stok");
});

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'show'])->name("profile.show");
  Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
  Route::put('/profile/password', [ProfileController::class, 'updatePassword'])->name('profile.password.update'); 
  // Route::get("/password/{id}", [PasswordController::class, 'edit'])->name('password.edit');
  // Route::patch("/password", [PasswordController::class, 'update'])->name('password.update');
});

Route::middleware('auth')->prefix('notif')->group(function () {
  Route::post('/', [NotificationController::class, 'saveNotification'])->name('notif.store');
  Route::delete('/{slug}', [NotificationController::class, 'removeNotification'])->name('notif.delete');
  Route::get('/user/clicked-events', [EventController::class, 'getUserClickedEvents'])->name('user.clicked.events');
});

require __DIR__ . '/auth.php';
// require __DIR__ . '/testing.php';
