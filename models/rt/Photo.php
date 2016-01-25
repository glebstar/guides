<?php

namespace app\models\rt;

use Yii;
use yii\db\ActiveRecord;

class Photo extends ActiveRecord
{
    public static function tableName()
    {
        return 'rutraveler.vw_rt_photo';
    }

    public static function primaryKey()
    {
        return ['id'];
    }

    public static function getPhotos($limit=false) {
        $select = self::find()
            ->leftJoin('rutraveler.vw_rt_photo_album AS album', 'rutraveler.vw_rt_photo.album_id=album.id')
            ->where(['album.user_id' => \app\models\rt\guide\User::getCurrentUserId()])
            ->orderBy('random()')
            ->asArray();

        if($limit) {
            $select->limit($limit);
        }

        return $select->all();
    }

    public static function getPhotoUrl($albumId, $bodyId, $ext, $w=194, $h=194) {
        $folderName = \app\models\rt\guide\User::getPhotoFolder();

        return Yii::$app->params['rutravellerHost'] . '/icache/' . $folderName . "/al{$albumId}/{$bodyId}_{$w}x{$h}.{$ext}";
    }
}