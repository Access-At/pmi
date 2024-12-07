<?php

namespace App\Services;

use App\Http\Resources\ScheduleDashboardResource;
use App\Http\Resources\ScheduleDetailResource;
use App\Http\Resources\ScheduleResource;
use App\Repositories\ScheduleDetailRepository;
use App\Repositories\ScheduleRepository;
use App\Repositories\StockDetailRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Storage;

class ScheduleService
{
    public static function getSchedulesDashboard($search)
    {
        return  ScheduleDashboardResource::collection(ScheduleRepository::getSchedulesDashboard($search));
    }

    public static function getSchedules()
    {
        return ScheduleResource::collection(ScheduleRepository::getSchedules());
    }

    public static function getSchedulesBySlug(string $slug)
    {
        return new ScheduleDetailResource(ScheduleRepository::getSchedulesBySlug($slug));
    }

    public static function createSchedule(array $data)
    {
        $bloodStock = $data['blood_stock'];
        $imageName = null;

        if (isset($data['image'])) {
            $imageName = self::handleImageUpload($data['image']);
            $data['image'] = $imageName;
        }

        unset($data['blood_stock']);
        $schedule = ScheduleRepository::createSchedule($data);
        self::createBloodStockDetails($schedule->id, $bloodStock);

        return self::getSchedulesBySlug($schedule->slug);
    }

    public static function updateSchedule($slug, array $data)
    {
        $schedule = ScheduleRepository::getSchedulesBySlug($slug);

        if (!$schedule) {
            return ['message' => 'Schedule not found'];
        }

        $bloodStock = $data['blood_stock'] ?? [];
        $imageName = $schedule->image;

        // Handle image update
        if (isset($data['image'])) {
            // Delete the old image if exists
            if ($imageName) {
                Storage::disk('public')->delete('schedules/' . $imageName);
            }
            $imageName = self::handleImageUpload($data['image']);
            $data['image'] = $imageName;
        }

        // Unset blood_stock from the data array
        unset($data['blood_stock']);

        // Update the schedule
        ScheduleRepository::updateSchedule($schedule->id, $data);

        // remove old blood stock
        $scheduleDetails = ScheduleDetailRepository::getScheduleDetail($schedule->id);
        self::removeBloodStockDetails($scheduleDetails);

        // create new blood stock
        self::createBloodStockDetails($schedule->id, $bloodStock);
        return self::getSchedulesBySlug($schedule->slug);
    }


    public static function deleteSchedule(string $slug)
    {
        $scheduleId = ScheduleRepository::getSchedulesBySlug($slug)->id;
        $scheduleDetails = ScheduleDetailRepository::getScheduleDetail($scheduleId);

        self::removeBloodStockDetails($scheduleDetails);
        return ScheduleRepository::deleteSchedule($slug);
    }

    private static function handleImageUpload($image): string
    {
        $imageName = uniqid() . '_' . time() . '.' . $image->extension();
        Storage::disk('public')->putFileAs('schedules', $image, $imageName);
        return $imageName;
    }

    private static function removeBloodStockDetails(Collection $scheduleDetails): void
    {
        $stockDetailIds = $scheduleDetails->pluck('stock_detail_id');
        StockDetailRepository::deleteStockDetail($stockDetailIds);
    }

    private static function createBloodStockDetails(int $scheduleId, array $bloodStock): void
    {
        foreach ($bloodStock as $stock) {
            foreach ($stock["amounts"] as $type => $amount) {
                $stockDetail = StockDetailRepository::createStockDetail([
                    'blood_type' => $type,
                    'blood_category' => $stock["category"],
                    'amount' => $amount,
                ]);

                ScheduleDetailRepository::createScheduleDetail([
                    'schedule_id' => $scheduleId,
                    'stock_detail_id' => $stockDetail->id,
                ]);
            }
        }
    }
}
