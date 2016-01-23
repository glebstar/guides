<?php

namespace app\models\rt;

use Yii;
use yii\db\ActiveRecord;

class Place extends ActiveRecord
{
    public static function tableName()
    {
        return 'rutraveler.vw_rt_place';
    }

    public static function primaryKey()
    {
        return ['id'];
    }
}