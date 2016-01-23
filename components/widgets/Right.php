<?php

namespace app\components\widgets;

use Yii;
use yii\base\Widget;

class Right extends Widget
{
    public function run()
    {
        return $this->render('right');
    }
}