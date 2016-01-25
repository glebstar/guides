<?php

namespace app\controllers;

use Yii;
use app\models\rt\guide\User;
use app\models\rt\guide\Geo;
use app\models\rt\community\Excursion;
use app\models\rt\Photo;


class MainController extends WebAppController
{
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ]
        ];
    }

    public function actionIndex()
    {
        return $this->render('index', [
            'guide' => User::getCurrentGuide(),
            'cities' => Geo::getGuideCities(3),
            'excursions' => Excursion::getExcursions(3),
            'photos' => Photo::getPhotos(12)
        ]);
    }

}
