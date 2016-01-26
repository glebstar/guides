<?php

namespace app\controllers;

use Yii;
use app\models\rt\guide\User;
use app\models\rt\guide\Geo;
use app\models\rt\community\Excursion;
use app\models\rt\Photo;


class MainController extends WebAppController
{
    public $enableCsrfValidation = false;

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

    public function actionAddmessage()
    {
        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $data = [
            'status' => 'OK',
            'message' => ''
        ];

        $request = Yii::$app->request;

        $message = $request->post('message');
        if(!$message) {
            $data['status'] = 'Err';
            $data['message'] = 'не введен текст сообщения!';

            return $data;
        }

        $tblMessage = new \app\models\rt\guide\Message();
        $tblMessage->guide_id = User::getCurrentGuideId();
        $tblMessage->user_text = $message;
        $tblMessage->save();

        return $data;
    }
}
