<?php

namespace app\controllers;
use app\models\rt\guide\User;

class ServiceController extends WebAppController
{
    public function actionIndex()
    {
        return $this->render('index', [
            'guide' => User::getCurrentGuide(),
        ]);
    }

}