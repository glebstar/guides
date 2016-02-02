<?php

namespace app\helpers;

class Arr
{
    /*
     * разбивает массив на num массивов и возвращает массив элементами которого являются полученные фрагменты
     * @param array $data
     * @param int $num
     * @param bool $biasLast объединяем лишний массив с последним либо первым
     * @return array
     */
    public static function getChunkArrayByNum(array $data, $num, $biasLast = true) {
        if($num == 0) {
            return $data;
        }
        if(!$data) {
            return $data;
        }
        $elementInArray = round(count($data) / $num);
        if(!$elementInArray) {
            return array($data);
        }
        $data = array_chunk($data, $elementInArray, true);
        if(count($data) > $num) {

            $indexBias = $biasLast ? ($num - 1) : 0;
            if(isset($data[$indexBias]) && isset($data[$num])) {

                $data[$indexBias] = array_merge($data[$indexBias], $data[$num]);
                unset($data[$num]);
            }
        }
        return $data;
    }
}