<?php

namespace app\components\widgets\modal;

use Yii;
use yii\base\Widget;
use app\models\rt\guide\Geo;

class OrderExc extends Widget
{
    public function run()
    {
        return $this->render('orderExc', [
            'countries' => Geo::getGuideCountries(),
            'cities' => Geo::getGuideCities()
        ]);
    }
}