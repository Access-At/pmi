<?php

namespace App\Http\Requests;

use App\Enums\BloodRhesus;
use App\Enums\BloodType;
use App\Enums\Gender;
use App\Models\User;
use BenSampo\Enum\Rules\Enum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {
    return [
      'username' => ['required', 'string', 'max:255'],
      'registration_number' => ['required', 'string', 'max:255'],
      "phone_number" => ['required', 'string', 'max:255'],
      "gender" => ['required', "in:male,female"],
      "domisili" => ['required', "string", 'max:255'],
      "type" => ["required", "in:A,B,AB,O"],
      "rhesus" => ["required", "in:positive,negative"],
      "image_path" => ["nullable", "string", 'max:255']
    ];
  }
}
