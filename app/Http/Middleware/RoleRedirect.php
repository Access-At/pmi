<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleRedirect
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check()) {
            $user = auth()->user();

            if ($user->isAdmin() && $request->path() === 'home') {
                return redirect()->route('dashboard');
            }

            if (!$user->isAdmin() && $request->path() === 'dashboard') {
                return redirect()->route('home');
            }
        }

        return $next($request);
    }
}