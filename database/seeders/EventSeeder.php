<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

use Faker\Factory as Faker;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create('id_ID');
        for ($i = 1; $i <= 10; $i++) {
            $title = $faker->text('25');

            Event::create([
                'title' => $title,
                'slug' => Str::slug($title),
                'description' => $faker->text('200'),
                'start_time' => $faker->dateTimeBetween('now', '+1 week'),
                'end_time' => $faker->dateTimeBetween('+1 week', '+2 week'),
                'date' => $faker->date('Y-m-d', 'now'),
                'location' => $faker->city,
                'lat' => $faker->latitude,
                'long' => $faker->longitude,
                'image' => 'https://picsum.photos/200/300',
            ]);
        }
    }
}
