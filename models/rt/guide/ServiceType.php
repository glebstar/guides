<?php

namespace app\models\rt\guide;

use Yii;
use yii\db\ActiveRecord;

class ServiceType extends ActiveRecord
{
    public static function tableName()
    {
        return 'rt_guide.vw_rt_guide_service_type';
    }

    public static function primaryKey()
    {
        return ['id'];
    }
}