<?php

namespace app\models\dict;

use Yii;
use yii\db\ActiveRecord;

class City extends ActiveRecord
{
    public static function tableName()
    {
        return 'dict.vw_dict_city';
    }

    public static function primaryKey()
    {
        return ['id'];
    }

    public static function getCity($id) {
        return self::find()
            ->where(['id' => $id])
            ->asArray()
            ->one();
    }
}