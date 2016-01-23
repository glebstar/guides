<?php

namespace app\models\rt\community;

use Yii;
use yii\db\ActiveRecord;
use app\models\rt\guide\User;

class Excursion extends ActiveRecord
{
    public static function tableName()
    {
        return 'rt_community.vw_rt_community_excursion';
    }

    public static function primaryKey()
    {
        return ['id'];
    }

    public static function getExcursions($limit = false)
    {
        $select = self::find()
            ->where(['guide_id' => User::getCurrentGuideId()])
            ->asArray();

        if($limit) {
            $select->limit($limit);
        }

        $excursions = $select->all();

        if(!$excursions) {
            return array();
        }

        $excIds = array();

        foreach ($excursions as $exc) {
            $excIds[] = $exc['id'];
        }

        $excPlaces = RelExcPlace::find()
            ->where(['excursion_id' => $excIds])
            ->orderBy('custom_order')
            ->asArray()
            ->all();

        $placeIds = array();
        foreach ($excPlaces as $row) {
            $placeIds[] = $row['place_id'];
        }

        if (!empty($placeIds)) {
            $placesAll = \app\models\rt\Place::find()
                ->where(['id' => array_unique($placeIds)])
                ->asArray()
                ->all();

            $places = [];
            foreach($placesAll as $_p) {
                $places[$_p['id']] = $_p;
            }

            foreach($excursions as &$row) {
                $row['places'] = array();
                foreach ($excPlaces as $eprow) {
                    if ($eprow['excursion_id'] == $row['id'] && isset($places[$eprow['place_id']])) {
                        $row['places'][] = $places[$eprow['place_id']];
                    }
                }
            }
        }

        return $excursions;
    }
}