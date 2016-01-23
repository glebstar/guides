<?php

namespace app\models\rt\community;

use Yii;
use yii\db\ActiveRecord;

class RelExcPlace extends ActiveRecord
{
    public static function tableName()
    {
        return 'rt_community.vw_rt_rel_community_excursion_place';
    }

    public static function primaryKey()
    {
        return ['id'];
    }
}