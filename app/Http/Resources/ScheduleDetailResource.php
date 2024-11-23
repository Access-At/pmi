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

        // Totals by blood_category and blood_type for table format
        $tableData = collect($details)
            ->groupBy('blood_category')
            ->map(function ($groupedByCategory) {
                return $groupedByCategory
                    ->groupBy('blood_type')
                    ->map(function ($groupedByType) {
                        return $groupedByType->sum('amount');
                    });
            });


        // // Totals by blood_type and blood_category
        // $byBloodTypeAndCategory = collect($details)->groupBy(['blood_type', 'blood_category'])->map(function ($categories) {
        //     return $categories->map(function ($items) {
        //         return $items->sum('amount');
        //     });
        // });

        // // Totals by blood_category and blood_type
        // $byBloodCategoryAndType = collect($details)->groupBy(['blood_category', 'blood_type'])->map(function ($types) {
        //     return $types->map(function ($items) {
        //         return $items->sum('amount');
        //     });
        // });

        // // Totals for all blood types
        // $totalByBloodType = collect($details)->groupBy('blood_type')->map(function ($items) {
        //     return $items->sum('amount');
        // });

        $totalByBloodType = collect($details)->groupBy('blood_type')->map(function ($items) {
            return [
                'type' => $items->first()->blood_type,
                'total' => $items->sum('amount')
            ];
        })->values();

        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'location' => $this->location,
            'image' => asset("storage/schedules/" . $this->image),
            'details' => DetailStockResource::collection($details),
            // 'details_table' => $tableData,
            'totals' => [
                'by_blood_type' => $totalByBloodType,
            ]
            // 'totals' => [
            //     'by_blood_type_and_category' => $byBloodTypeAndCategory,
            //     'by_blood_category_and_type' => $byBloodCategoryAndType,
            //     'total_by_blood_type' => $totalByBloodType,
            // ]
        ];
    }
}
