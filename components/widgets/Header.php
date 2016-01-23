<?php

namespace app\components\widgets;

use Yii;
use yii\base\Widget;
use app\models\rt\guide\Geo;

class Header extends Widget
{
    public function run()
    {
        return $this->render('header', [
            'country' => Geo::getGuideCountries(1)
        ]);
    }
}