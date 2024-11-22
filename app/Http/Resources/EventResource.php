<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $start_time =  Carbon::createFromFormat('H:i:s', $this->start_time)->translatedFormat('H:i');
        $end_time = Carbon::createFromFormat('H:i:s', $this->end_time)->translatedFormat('H:i');

        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'date' => Carbon::parse($this->date)->translatedFormat('l, d F Y'),
            'time' => "{$start_time} - {$end_time}",
            'location' => $this->location,
            'lat' => $this->lat,
            'long' => $this->long,
            'image' => asset("storage/events/" . $this->image),
        ];
    }
}
