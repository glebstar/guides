<?php

namespace app\helpers;

class Text
{
    /**
     * Возвращает слова с правильным окончанием для числительных: 1 день, 2 дня, 10 дней; 1 размещений, 2 размещения, ...
     * <code>
     *  $dayNum=10;
     *  $dayStr=getDeclension($dayNum, array( 'день', 'дня', 'дней' ));
     * //$dayStr будет содержать "дней"
     * </code>
     *
     * @param $digit
     * @param $forms
     * @return mixed
     */
    public static function getDeclension($digit, $forms) {
        $digit = substr($digit, -2);
        $remainder = (int)$digit;

        if ($remainder > 20) {
            $remainder %= 10;
        }
        if (sizeof($forms) == 2) {
            $forms[2] = $forms[1];
        }

        if ($remainder == 1) {
            $form = $forms[0];
        } elseif ($remainder > 1 && $remainder < 5) {
            $form = $forms[1];
        } else {
            $form = $forms[2];
        }

        return $form;
    }
}