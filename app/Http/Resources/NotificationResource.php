<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    $date = Carbon::parse($this->event->date)->translatedFormat('l, d F Y');
    $start_time = Carbon::createFromFormat('H:i:s', $this->event->start_time)->translatedFormat('H:i');

    $start_event = Carbon::parse($this->event->start_time);
    $now = Carbon::now();
    $diff_in_days = $start_event->diffInDays($now);

    if ($diff_in_days <= 5 && $diff_in_days % 1 === 0) {
      return [
        'id' => $this->id,
        'slug' => $this->event->slug,
        'date' => $date . ' ' . $start_time,
        'description' => "Event {$this->event->title} yang di laksanakan tersisa " . (int)abs(Carbon::parse($this->event->date)->diffInDays(Carbon::now())) . " hari pada tanggal"
      ];
    }

    // return [
    //   'date' => $date . ' ' . $start_time,
    //   'description' => "Event {$this->event->title} yang di laksanakan tersisa " . (int)abs(Carbon::parse($this->event->date)->diffInDays(Carbon::now())) . " hari pada tanggal"
    // ];
  }
}
