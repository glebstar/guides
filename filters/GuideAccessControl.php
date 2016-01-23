<?php

namespace app\filters;

use Yii;
use yii\base\ActionFilter;
use yii\web\ErrorAction;
use yii\web\NotFoundHttpException;
use app\models\rt\guide\User;

class GuideAccessControl extends ActionFilter
{
    public function beforeAction($action)
    {
        // заглушка для предотвращения циклической ошибки
        if ($action instanceof ErrorAction) {
            return true;
        }

        if(!User::getCurrentGuide()) {
            throw new NotFoundHttpException();
        }

        return true;
    }
}
