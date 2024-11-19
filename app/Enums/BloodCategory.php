<?php

declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static AHF()
 * @method static static FFP()
 * @method static static PCLR()
 * @method static static PC()
 * @method static static TC()
 */
final class BloodCategory extends Enum
{
    const AHF = 'Anti Hemophilic Factor (AHF)';
    const FFP = 'Fresh Frozen Plasma (FFP)';
    const PCLR = 'Packed Red Cell Leuko Reduce (PCLR)';
    const PC = 'Packed Red Cell (PC)';
    const TC = 'Thrombocyte Concentrate (TC)';
}
