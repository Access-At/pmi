<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Services\EventService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DashboardController extends Controller
{
  public function event(Request $request)
  {
    $user = Auth::user();
    $is_admin = $user->role === 'admin';
    if (!$is_admin) return redirect()->route('home');

    $events = EventService::getEventsDashboard($request->input('search'));
    return Inertia::render('Dashboard/Event', [
      'events' => $events,
    ]);
  }

  public function createEvent(EventRequest $request)
  {
    EventService::createEvent($request->validated());

    return Redirect::route('dashboard.event')->with('success', 'Event created successfully');
  }

  public function updateEvent($slug, EventRequest $request)
  {
    EventService::updateEvent($slug, $request->validated());
    return Redirect::route('dashboard.event')->with('success', 'Event updated successfully');
  }

  public function deleteEvent($slug)
  {
    EventService::deleteEvent($slug);
    return Redirect::route('dashboard.event')->with('success', 'Event deleted successfully');
  }

  // stok Darah
  public function pmi()
  {
    $user = Auth::user();
    $is_admin = $user->role === 'admin';
    if (!$is_admin) return redirect()->route('home');

    return Inertia::render('Dashboard/PMI');
  }

  // public function createStok() {}
  // public function updateStok() {}
  // public function deleteStok() {}
}
