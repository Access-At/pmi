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
        return [
            'type' => $this->blood_type,
            'blood_type_format' => $this->blood_type_format, // Include this to ensure it’s appended
            'category' => $this->blood_category,
            'amount' => $this->amount,
        ];
    }
}
