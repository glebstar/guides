<?php

namespace app\components\widgets\modal;

use Yii;
use yii\base\Widget;

class OrderExc extends Widget
{
    public function run()
    {
        return $this->render('orderExc');
    }
}