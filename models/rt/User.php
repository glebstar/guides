<?php

namespace app\models\rt;

use Yii;
use yii\db\ActiveRecord;

class User extends ActiveRecord
{
    public static function tableName()
    {
        return 'rutraveler.vw_rt_user';
    }

    public static function primaryKey()
    {
        return ['id'];
    }
}