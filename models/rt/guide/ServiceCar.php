<?php

namespace app\models\rt\guide;

use Yii;
use yii\db\ActiveRecord;

class ServiceCar extends ActiveRecord
{
    public static function tableName()
    {
        return 'rt_guide.vw_rt_guide_service_car';
    }

    public static function primaryKey()
    {
        return ['id'];
    }
}