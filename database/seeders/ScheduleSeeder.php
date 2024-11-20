<?php

namespace Database\Seeders;

use App\Models\Schedule;
use App\Models\ScheduleDetail;
use App\Models\StockDetail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Str;

class ScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create('id_ID');

        for ($i = 1; $i <= 10; $i++) {
            $title = $faker->text('25');

            $schedule = Schedule::create([
                'title' => $title,
                'slug' => Str::slug($title),
                'location' => $faker->address,
                'description' => $faker->text('200'),
                'image' => 'https://picsum.photos/200/300',
            ]);

            $array_bload_type = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
            $array_blood_category = ['AHF', 'FFP', 'PCLR', 'PC', 'TC'];

            foreach ($array_bload_type as $key => $value_type) {
                foreach ($array_blood_category as $key => $value_category) {
                    $stock_blood = StockDetail::create([
                        'blood_type' => $value_type,
                        'amount' => $faker->numberBetween(1, 100),
                        'blood_category' => $value_category,
                    ]);

                    ScheduleDetail::create([
                        'schedule_id' => $schedule->id,
                        'stock_detail_id' => $stock_blood->id,
                    ]);
                }
            }
        }
    }
}
