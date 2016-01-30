<?php

namespace app\controllers;

use Yii;
use app\models\rt\guide\User;
use app\models\rt\guide\Geo;
use app\models\rt\community\Excursion;
use app\models\rt\Photo;
use app\models\dict\Country;
use app\models\dict\City;
use app\models\rt\community\AgencyOrder;


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

    public function actionAddorderexc() {
        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $data = [
            'status' => 'OK',
            'message' => ''
        ];

        $request = Yii::$app->request;

        $excId = $request->post('excId', false);
        $excursion = false;

        if (!$excId) {
            $countryId = $request->post('country', false);
            $cityId = $request->post('city', false);

            if(!$countryId || !$cityId) {
                $data['status'] = 'Err';
                $data['message'] = 'не переданы параметры экскурсии или страны и города!';
                return $data;
            }
        } else {
            $excursion = Excursion::getExcursion($excId);
            if(!$excursion) {
                $data['status'] = 'Err';
                $data['message'] = 'не найдена экскурсия!';
                return $data;
            }
        }

        $excDate = $request->post('excDate', false);
        $price = $request->post('price', false);
        $countBig = $request->post('countBig', false);
        $countSmall = $request->post('countSmall', false);
        $excComment = $request->post('excComment', false);
        $name = $request->post('name', false);
        $phone = $request->post('phone', false);
        $email = $request->post('email', false);

        if(!$excDate || !$excComment || !$name || !$phone || !$email) {
            $data['status'] = 'Err';
            $data['message'] = 'не заполнены обязательные поля!';
            return $data;
        }

        $validator = new \yii\validators\EmailValidator();
        if(!$validator->validate($email)) {
            $data['status'] = 'Err';
            $data['message'] = 'не корректный e-mail!';
            return $data;
        }

        if(!$excursion) {
            $country = Country::getCountry($countryId);
            if(!$country) {
                $data['status'] = 'Err';
                $data['message'] = 'страна не найдена!';
                return $data;
            }

            $city = City::getCity($cityId);
            if(!$city) {
                $data['status'] = 'Err';
                $data['message'] = 'город не найден!';
                return $data;
            }

            $text = $country['name'] . ', ' . $city['name'] . '<br />';
            $text .= 'Дата проведения экскурсии: ' . $excDate . '<br />';
            $text .= $countBig ? 'Количество взрослых: ' . $countBig . '<br />' : '';
            $text .= $countSmall ? 'Количество детей: ' . $countSmall . '<br />' : '';
            $text .= $price ? 'Цена до: ' . $price . '<br />' : '';

            $text .= '<br /><br />' . $excComment;

            $orderTbl = new AgencyOrder();
            $orderTbl->manager_id = User::getCurrentGuideId();
            $orderTbl->country_id = $countryId;
            $orderTbl->user_name = $name;
            $orderTbl->user_email = $email;
            $orderTbl->user_phone = $phone;
            $orderTbl->user_params = $text;
            $orderTbl->user_id = 0;
            $orderTbl->excursion_id = 0;
            $orderTbl->save();
        } else {
            $text = 'Дата проведения экскурсии: ' . $excDate . '<br />';
            if($price) {
                $text .= 'Стоимость до: ' . $price . '<br />';
            }
            $text .= $countBig ? 'Количество взрослых: ' . $countBig . '<br />' : '';
            $text .= $countSmall ? 'Количество детей: ' . $countSmall . '<br />' : '';
            $text .= '<br /><br />' . $excComment;

            $orderTbl = new AgencyOrder();
            $orderTbl->manager_id = User::getCurrentGuideId();
            $orderTbl->country_id = $excursion['country_id'];
            $orderTbl->user_name = $name;
            $orderTbl->user_email = $email;
            $orderTbl->user_phone = $phone;
            $orderTbl->user_params = $text;
            $orderTbl->user_id = 0;
            $orderTbl->excursion_id = $excursion['id'];
            $orderTbl->save();
        }

        /**
         * @todo
         * добавить отправку заявки на e-mail
         */
        return $data;
    }
}
