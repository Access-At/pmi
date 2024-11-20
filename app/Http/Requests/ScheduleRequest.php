<?php

namespace App\Http\Requests;

use App\Enums\BloodCategory;
use App\Enums\BloodType;
use Illuminate\Foundation\Http\FormRequest;

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
        return [
            'title' => 'required|string',
            'location' => 'required|string',
            'description' => 'required|string',
            'image' => 'required|file|mimes:jpg,jpeg,png',
            'blood_stock' => 'required|array',
            'blood_stock.*.type' => 'required|in:A+,A-,B+,B-,AB+,AB-,O+,O-,A+,A-,B+,B-,AB+,AB-,O+,O-',
            'blood_stock.*.category' => 'required|enum_key:' . BloodCategory::class,
            'blood_stock.*.amount' => 'required|numeric',
        ];
    }
}
