<?php

namespace app\models\rt\guide;

use Yii;
use yii\db\ActiveRecord;

class Geo extends ActiveRecord
{
    public static function tableName()
    {
        return 'rt_guide.vw_rt_guide_user_geo';
    }

    public static function primaryKey()
    {
        return ['id'];
    }

    public static function getGuideCities($limit=false)
    {
        $select = self::find()
            ->select([
                'guide_city.id as id',
                'guide_city.country as country_id',
                'guide_city.name as name'
            ])
            ->leftJoin('dict.vw_dict_city as guide_city', 'rt_guide.vw_rt_guide_user_geo.city = guide_city.id')
            ->where(['rt_guide.vw_rt_guide_user_geo.guide_id' => User::getCurrentGuideId()])
            ->orderBy('random()')
            ->asArray();

        if($limit) {
            $select->limit($limit);
        }

        return $select->all();
    }

    public static function getGuideCountries($limit = false)
    {
        $select = self::find()
            ->select([
                'distinct(country.id) as id',
                'country.name as name',
                'country.name_genitive as nameGenetive'
            ])
            ->leftJoin('dict.vw_dict_country as country', 'rt_guide.vw_rt_guide_user_geo.country = country.id')
            ->where(['rt_guide.vw_rt_guide_user_geo.guide_id' => User::getCurrentGuideId()])
            ->asArray();

        if($limit) {
            $select->limit($limit);
        }

        return $select->all();
    }
}