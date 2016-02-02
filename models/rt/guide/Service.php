<?php

namespace app\models\rt\guide;

use Yii;
use yii\db\ActiveRecord;

class Service extends ActiveRecord
{
    public static function tableName()
    {
        return 'rt_guide.vw_rt_guide_service';
    }

    public static function primaryKey()
    {
        return ['id'];
    }

    public static function getService() {
        $data = self::find()
            ->where(['guide_id' => User::getCurrentGuideId()])
            ->asArray()
            ->one();

        $data['service_car'] = ServiceCar::find()
            ->where(['service_id' => $data['id']])
            ->asArray()
            ->all();

        $data['service_type'] = ServiceType::find()
            ->select('rt_guide.vw_rt_guide_service_type.*, dict_type.name AS service_name')
            ->leftJoin('rt_guide.vw_rt_dict_service_type AS dict_type', 'dict_type.id = rt_guide.vw_rt_guide_service_type.type_id')
            ->where(['service_id' => $data['id']])
            ->asArray()
            ->all();

        return $data;
    }
}