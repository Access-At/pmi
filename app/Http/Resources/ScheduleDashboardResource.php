<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ScheduleDashboardResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $details = $this->details;

        $dataTable = collect($details)->groupBy(['blood_category', 'blood_type'])->map(function ($types) {
            return $types->map(function ($items) {
                return $items->sum('amount');
            });
        });

        $totalByBloodType = collect($details)->groupBy('blood_category')->map(function ($items) {
            return [
                'type' => $items->first()->blood_category,
                'total' => $items->sum('amount')
            ];
        })->values();

        // return parent::toArray($request);
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'location' => $this->location,
            'image' => asset("storage/schedules/" . $this->image),
            'details' => $dataTable,
            'totals' => [
                'by_blood_type' => $totalByBloodType,
            ]
        ];
    }
}
