<?php

namespace App\Http\Requests;

use App\Enums\BloodCategory;
use App\Enums\BloodType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ScheduleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'title' => 'required|string',
            'location' => 'required|string',
            'blood_stock' => 'required|array',
            'blood_stock.*.category' => 'required|string',
            'blood_stock.*.amounts' => 'required|array',
            'blood_stock.*.amounts.*' => 'nullable|numeric|min:0',
        ];

        if ($this->hasFile('image')) {
            $rules['image'] = [
                'required',
                'image',
                'mimes:png,jpg,jpeg',
            ];
        }

        return $rules;
    }
}
