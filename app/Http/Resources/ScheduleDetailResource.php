<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ScheduleDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $details = $this->details;

        $totalByBloodType = collect($details)->groupBy('blood_type')->map(function ($items) {
            return [
                'type' => $items->first()->blood_type_format,
                'total' => $items->sum('amount')
            ];
        })->values();


        $dataTable = collect($details)->groupBy(['blood_category', 'blood_type'])->map(function ($types) {
            return $types->map(function ($items) {
                return $items->sum('amount');
            });
        });

        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'location' => $this->location,
            'image' => asset("storage/schedules/" . $this->image),
            // 'details' => DetailStockResource::collection($details),
            'details' => $dataTable,
            'totals' => [
                'by_blood_type' => $totalByBloodType,
            ]
        ];
    }
}
