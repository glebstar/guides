<header>
    <div class="top-header-container">
        <div class="top-header-wrapper-right">
            <div class="top-header-links">
                <a href="<?=Yii::$app->params['rutravellerHost']?>" class="top-header-links-a rt"><img src="/i/rutraveler_300.png" alt=""></a>
            </div>
            <div class="top-header-social">
                <a href="<?=Yii::$app->params['sn']['ok']?>" class="top-header-social-link"><i class="fa fa-odnoklassniki"></i></a>
                <a href="<?=Yii::$app->params['sn']['instagram']?>" class="top-header-social-link"><i class="fa fa-instagram"></i></a>
                <!--<a href="#" class="top-header-social-link"><i class="fa fa-twitter"></i></a>-->
                <a href="<?=Yii::$app->params['sn']['fb']?>" class="top-header-social-link"><i class="fa fa-facebook"></i></a>
                <a href="<?=Yii::$app->params['sn']['vk']?>" class="top-header-social-link"><i class="fa fa-vk"></i></a>
            </div>
            <div class="top-header-main-link">
                <a href="<?=Yii::$app->params['rutravellerHost']?>">Вернуться</br>на основной сайт</a>
            </div>
        </div>
        <div class="top-header-wrapper-left">
            <div class="header-ttl">
                <h1 class="header-ttl-h1">Индивидуальный гид по <?=$country[0]['nameGenetive'] ? $country[0]['nameGenetive'] : $country[0]['name']; ?></h1>
            </div>
        </div>
    </div>
    <div class="bottom-header-container">
        <div class="bottom-header-wrapper-left">
            <div class="bottom-header-stock">Акция</div>
            <div class="bottom-header-ttl">
                <h1 class="bottom-header-ttl-h1">Экскурсии</br> для гурманов по <?=$country[0]['nameGenetive'] ? $country[0]['nameGenetive'] : $country[0]['name']; ?></h1>
            </div>
            <a href="#" class="bottom-header-button">Подробности</a>
        </div>
    </div>
</header>