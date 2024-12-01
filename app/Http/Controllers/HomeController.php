<?php

namespace App\Http\Controllers;

use App\Services\EventService;
use App\Services\NotificationService;
use App\Services\ScheduleService;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function __construct()
  {
    $user = Auth::user();
    if (!$user) return;
    $notifications = NotificationService::getNotifications();
    $notifications = $notifications->filter(function ($notification) {
      $startEvent = Carbon::parse($notification->event->start_time);
      $now = now();
      $diffInDays = $startEvent->diffInDays($now);
      return $diffInDays <= 5 && $diffInDays % 1 === 0;
    });


    Inertia::share([
      'notifications' => NotificationService::getNotifications(),
      // 'notifications' => $notifications,
      // "notifications" => [
      //   'data' => []
      // ]
    ]);
  }
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

  public function editProfile()
  {
    return Inertia::render('Profile/Edit');
  }
}
