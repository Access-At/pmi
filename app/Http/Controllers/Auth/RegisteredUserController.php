<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
  /**
   * Display the registration view.
   */
  public function create(): Response
  {
    return Inertia::render('Auth/Register');
  }

  /**
   * Handle an incoming registration request.
   *
   * @throws \Illuminate\Validation\ValidationException
   */
  public function store(RegisterRequest $request): RedirectResponse
  {
    // $request->validate();
    $request->validate([
      'email' => 'required|email|unique:' . User::class,
      'username' => 'required|string|max:255',
      'phone_number' => 'required|string|max:255',
      'password' => ['required', 'confirmed', Rules\Password::defaults()],
      'terms' => 'required|boolean',
    ]);

    // $user = User::create($request->validate());
    $user = User::create([
      'email' => $request->email,
      'username' => $request->username,
      'phone_number' => $request->phone_number,
      'password' => Hash::make($request->password),
      'terms' => $request->terms,
    ]);

    event(new Registered($user));

    Auth::login($user);

    return redirect(route('dashboard', absolute: false));
  }
}
