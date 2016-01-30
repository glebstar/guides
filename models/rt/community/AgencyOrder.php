<?php

namespace app\models\rt\community;

use Yii;
use yii\db\ActiveRecord;

class AgencyOrder extends ActiveRecord
{
    public static function tableName()
    {
        return 'rt_community.vw_rt_community_agency_order';
    }

    public static function primaryKey()
    {
        return ['id'];
    }
}