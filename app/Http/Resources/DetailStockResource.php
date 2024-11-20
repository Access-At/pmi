<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DetailStockResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // $totalAmount = $this->collection->sum('amount');

        return [
            'type' => $this->blood_type,
            'category' => $this->blood_category,
            'amount' => $this->amount,
            // 'total' => $totalAmount,
        ];
    }
}
