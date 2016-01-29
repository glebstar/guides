<?php

namespace app\models\rt\guide;

use Yii;
use yii\db\ActiveRecord;

class User extends ActiveRecord
{
    private static $_currentGuide = null;

    public static function tableName()
    {
        return 'rt_guide.vw_rt_guide_user';
    }

    public static function primaryKey()
    {
        return ['id'];
    }

    public static function getCurrentGuide()
    {
        if(self::$_currentGuide !== null) {
            return self::$_currentGuide;
        }

        $request = Yii::$app->getRequest();
        $userNick = false;

        if (YII_ENV_DEV) {
            $userNick = $request->getQueryParam('__nick__', false);
        }

        if(!$userNick) {
            //$userNick = preg_replace('/^(www\.)?(.+)\..+\..+$/', '$2', $request->serverName);
            $userNick = preg_replace('/^(www\.)?([^\.]+)\..+$/', '$2', $request->serverName);
        }

        $guide = self::find()
            ->leftJoin('rutraveler.vw_rt_user as rtuser', 'rtuser.id = rt_guide.vw_rt_guide_user.user_id')
            ->where(['lower(rt_guide.vw_rt_guide_user.nick_url)' => strtolower($userNick)])
            ->orWhere([
                'rt_guide.vw_rt_guide_user.nick_url' => '',
                'lower(rtuser.nick)' => strtolower($userNick)
            ])
            ->andWhere(['rt_guide.vw_rt_guide_user.active' => 1])
            ->asArray()
            ->one();

        if (!$guide) {
            self::$_currentGuide = false;
            return false;
        }

        $guide['info_full'] = \app\models\rt\User::find()
            ->where(['id' => $guide['user_id']])
            ->asArray()
            ->one();

        self::$_currentGuide = $guide;

        return $guide;
    }

    public static function getCurrentGuideId()
    {
        $guide = self::getCurrentGuide();
        return $guide['id'];
    }

    public static function getCurrentUserId()
    {
        $guide = self::getCurrentGuide();
        return $guide['user_id'];
    }

    public static function getPhotoFolder() {
        $guide = self::getCurrentGuide();

        $firstLetter = strtolower($guide['info_full']['nick']{0});
        if (strlen($guide['info_full']['nick']) == 1) {
            $secondLetter = "_";
        } else {
            $secondLetter = strtolower($guide['info_full']['nick']{1});
        }

        return "u_{$firstLetter}/{$secondLetter}/{$guide['info_full']['nick']}";
    }

    public static function getAvaUrl($w=165, $h=165)
    {
        $guide = self::getCurrentGuide();

        if(!$guide['info_full']['rt_user_avatar_id']) {
            return Yii::$app->params['rutravellerHost'] . "/icache/not_ava/1_{$w}x{$h}.jpg";
        }

        $path = self::getPhotoFolder();

        return Yii::$app->params['rutravellerHost'] . "/icache/{$path}/ava/{$guide['info_full']['rt_user_avatar_id']}_{$w}x{$h}.jpg";
    }
}