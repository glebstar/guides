<?php

namespace app\controllers;

use yii\web\Controller;
use app\filters\GuideAccessControl;

class WebAppController extends Controller
{
    public function behaviors()
    {
        return [
            [
                'class' => GuideAccessControl::className(),
            ]
        ];
    }

}