<?php

namespace App\Repositories;

use App\Models\Schedule;
use App\Models\StockDetail;

class StockDetailRepository
{
    public static function getStockDetails()
    {
        $query = StockDetail::get();
        return $query;
    }

    public static function createStockDetail($data)
    {
        $stockDetail = StockDetail::create($data);
        return $stockDetail;
    }

    public static function updateStockDetail($id, $amount)
    {
        $stockDetail = StockDetail::find($id)->first();
        return $stockDetail->update([
            'amount' => $amount,
        ]);
    }

    public static function deleteStockDetail($id)
    {
        $stockDetail = StockDetail::whereIn('id', $id)->delete();
        return $stockDetail;
    }
}
