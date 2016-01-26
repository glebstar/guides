<?php

namespace app\models\rt\guide;

use Yii;
use yii\db\ActiveRecord;

class Message extends ActiveRecord
{
    public static function tableName()
    {
        return 'rt_guide.vw_rt_guide_message';
    }

    public static function primaryKey()
    {
        return ['id'];
    }
}