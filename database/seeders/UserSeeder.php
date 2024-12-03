<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    User::create([
      'username' => 'admin',
      'email' => 'admin@example.com',
      'password' => Hash::make('password'),
      'role' => 'admin',
      'phone_number' => '08123456789',
      'terms' => true
    ]);

    User::create([
      'username' => 'user',
      'email' => 'user@example.com',
      'password' => Hash::make('password'),
      'role' => 'user',
      'phone_number' => '08123456739',
      'terms' => true
    ]);
  }
}
