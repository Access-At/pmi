<?php

namespace App\Http\Controllers;

use App\Services\EventService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
  public function event()
  {
    $events = EventService::getEventsDashboard();
    return Inertia::render('Dashboard/Event', [
      'events' => $events
    ]);
  }

  // public function createEvent() {}
  // public function updateEvent() {}
  // public function deleteEvent() {}

  // stok Darah
  public function stok()
  {
    return Inertia::render('Dashboard/Stok');
  }

  // public function createStok() {}
  // public function updateStok() {}
  // public function deleteStok() {}
}
