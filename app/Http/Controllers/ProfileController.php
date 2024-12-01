<?php

namespace App\Http\Controllers;

use App\Http\Requests\PasswordUpdateRequest;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use App\Services\ProfileService;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Validation\Rules;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
  /**
   * Display the user's profile form.
   */
  public function show()
  {
    return Inertia::render('Profile/Show', [
      'user' => Auth::user()
    ]);
  }
  public function edit()
  {
    return Inertia::render(
      'Profile/Edit',
      [
        'user' => Auth::user()
      ]
    );
  }

  /**
   * Update the user's profile information.
   */
  public function update(ProfileUpdateRequest $request): RedirectResponse
  {
    $user = Auth::user();

    if ($user instanceof User) {
      $user->username = $request->username;
      $user->registration_number = $request->registration_number;
      $user->phone_number = $request->phone_number;
      $user->gender = $request->gender;
      $user->domisili = $request->domisili;
      $user->type = $request->type;
      $user->rhesus = $request->rhesus;

      if ($request->hasFile('image_path')) {
        $imagePath = $request->file('image_path')->store('profile_images', 'public');
        $user->image_path = $imagePath;
      }

      $user->update();
    } else {
      return response()->json(['error' => 'User not found'], 404);
    }

    return Redirect::route('profile.edit')->with('success', 'Profile updated successfully');
  }

  public function editPassword()
  {
    return Inertia::render('Profile/ChangePassword');
  }

  public function updatePassword(PasswordUpdateRequest $request)
  {
    $user = Auth::user();

    if ($user instanceof User) {
      $user->password = Hash::make($request->password);
      $user->update();
    }
    return Redirect::route('profile.password.edit')->with('success', 'Password updated successfully');
  }

  /**
   * Delete the user's account.
   */
  public function destroy(Request $request): RedirectResponse
  {
    $request->validate([
      'password' => ['required', 'current_password'],
    ]);

    $user = $request->user();

    Auth::logout();

    $user->delete();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return Redirect::to('/');
  }
}
