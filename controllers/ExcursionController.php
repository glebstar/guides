<?php
namespace app\controllers;
use app\models\rt\guide\User;
use app\models\rt\community\Excursion;

class ExcursionController extends WebAppController
{
    public function actionIndex()
    {
        return $this->render('index', [
            'guide' => User::getCurrentGuide(),
            'excursions' => Excursion::getExcursions()
        ]);
    }

}