<?php

namespace App\Http\Controllers;

use App\Services\ActivityService;
use App\Services\EventService;
use App\Services\NotificationService;
use App\Services\ScheduleService;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function index()
  {
    return Inertia::render('Home', [
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register'),
    ]);
  }

  public function jadwalDonor()
  {
    $events = EventService::getEvents();
    $schedules = ScheduleService::getSchedules();

    return Inertia::render('JadwalDonor', [
      'events' => $events,
      'schedules' => $schedules,
    ]);
  }

  public function event($slug)
  {
    $event = EventService::getEventsBySlug($slug);

    return Inertia::render('EventDetail', [
      "event" => $event
    ]);
  }

  public function daftarPMI()
  {

    $schedules = ScheduleService::getSchedules();

    return Inertia::render('DaftarPMI', [
      'schedules' => $schedules,
    ]);
  }

  public function stokDarah($slug)
  {
    $bloodStoks = ScheduleService::getSchedulesBySlug($slug);
    return Inertia::render('StokDarah', [
      'bloodStoks' => $bloodStoks
    ]);
  }

  public function termsAndConditions()
  {
    return Inertia::render('TermsAndConditions');
  }

  public function privacyPolicy()
  {
    return Inertia::render('PrivacyPolicy');
  }
}
