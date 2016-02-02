<?php

namespace app\controllers;

use app\models\rt\guide\User;
use app\models\rt\guide\Service;

class AboutController extends WebAppController
{
    public function actionIndex()
    {
        $serviceData = Service::getService();

        $serviceAssocStyle = array(
            'transfer' => array(0 => 1),
            'service' => array(1 => 0, 2 => 5, 3 => 6, 4 => 2, 5 => 7, 6 => 3, 7 => 4)
        );

        $serviceItems = array();
        if($serviceData) {
            // первая услуга предоставление трансфера
            if($serviceData['providing_shuttle']) {
                $serviceItems[] = array(
                    'type' => 'transfer',
                    'type_id' => 0,
                    'name' => 'Трансферы'
                );
            }

            // остальные услуги
            if(isset($serviceData['service_type']) && $serviceData['service_type']) {
                foreach($serviceData['service_type'] as $value) {
                    // не нужен гид-экскурсовод
                    if($value['type_id'] != 1) {
                        $serviceItems[] = array(
                            'type' => 'service',
                            'type_id' => $value['type_id'],
                            'name' => $value['service_name']
                        );
                    }
                }
            }

            $serviceItems = \app\helpers\Arr::getChunkArrayByNum($serviceItems, 3, false);
        }

        return $this->render('index', [
            'guide' => User::getCurrentGuide(),
            'serviceData' => $serviceData,
            'serviceAssocStyle' => $serviceAssocStyle,
            'serviceItems' => $serviceItems
        ]);
    }

}
