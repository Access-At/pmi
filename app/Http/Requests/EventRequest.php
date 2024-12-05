<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EventRequest extends FormRequest
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
      'description' => 'required|string',
      'image' => [
        Rule::requiredIf(function () {
          return $this->isMethod('post');
        }),
        'image',
        'mimes:png,jpg,jpeg',
      ],
      'date' => 'required|date',
      'location' => 'required|string',
      'start_time' => 'required|date_format:H:i',
      'end_time' => 'required|date_format:H:i',
      'lat' => 'required|string',
      'long' => 'required|string',
    ];
  }
}
