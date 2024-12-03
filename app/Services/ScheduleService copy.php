<?php

namespace App\Services;

use App\Repositories\ActivityRepository;

class

{
    public static function saveActifity($data)
    {
        return ActivityRepository::saveActifity($data);
    }

    public static function removeActifity($id)
    {
        return ActivityRepository::removeActifity($id);
    }
}
