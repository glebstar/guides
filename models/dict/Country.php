<?php

namespace app\models\dict;

use Yii;
use yii\db\ActiveRecord;

class Country extends ActiveRecord
{
    public static function tableName()
    {
        return 'dict.vw_dict_country';
    }

    public static function primaryKey()
    {
        return ['id'];
    }

    public static function getCountry($id) {
        $data = self::find()
            ->where(['id' => $id])
            ->asArray()
            ->all();

        if(!$data) {
            return false;
        }

        return $data[0];
    }
}