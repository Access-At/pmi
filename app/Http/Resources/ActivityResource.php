<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ActivityResource extends JsonResource
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

        return [
            'slug' => $this->event->slug,
            'date' => $date . ' ' . $start_time,
        ];
    }
}
