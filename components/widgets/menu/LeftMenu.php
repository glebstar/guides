<?php

namespace app\components\widgets\menu;

use Yii;
use yii\base\Widget;

class LeftMenu extends Widget
{
    public function run()
    {
        return $this->render('leftMenu', [
            'menu' => $this->getMenuItems(),
            'requestedPath' => Yii::$app->getRequest()->url
        ]);
    }

    protected function getMenuItems()
    {
        return [
            [
            'name' => 'Все о гиде',
            'items' => [
                ['name' => 'Главная', 'url' => '/'],
                ['name' => 'Обо мне', 'url' => '/about'],
                ['name' => 'Экскурсии', 'url' => '/excursion'],
                ['name' => 'Услуги и цены', 'url' => '/service'],
                ['name' => 'Отправить заявку', 'url' => 'javascript:void(0);', 'class' => 'show-order-exc-popup'],
                ['name' => 'Контактная инфа', 'url' => '#'],
                ['name' => 'Отзывы о работе гида', 'url' => '#']
            ]
            ],

            [
            'name' => 'Контент гида',
            'items' => [
                ['name' => 'Маршруты', 'url' => '#'],
                ['name' => 'Фото', 'url' => '#'],
                ['name' => 'Отзывы гида', 'url' => '#'],
                ['name' => 'Заметки', 'url' => '#'],
                ['name' => 'Ответы на вопросы', 'url' => '#'],
                ['name' => 'Советы', 'url' => '#'],
                ['name' => 'Отзывы об отелях', 'url' => '#']
            ]
            ]
        ];
    }
}