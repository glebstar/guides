<?php

namespace app\components\widgets;

use Yii;
use yii\base\Widget;

class Footer extends Widget
{
    public function run()
    {
        return $this->render('footer', []);
    }
}