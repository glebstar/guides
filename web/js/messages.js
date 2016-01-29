/**
 * Объект для отображения сообщений типа alert и confirm
 * для псевдомодальности используется .overlay()
 * а также callback для обоих типов сообщения
 */
function dlgMessage(){
    
    this.title = 'Rutraveller.ru';
    this.leftButton = 'Да';
    this.rightButton = 'Нет';
    this.button = 'Закрыть';
    this.dialogId = 'message_' + Math.floor(Math.random() * 1000);
    this.dialog = $('\
        <div id="' + this.dialogId + '" class="pp-photos popup popup-over-fs" style="width:303px; left:450px; top: 900px;display:none; position: relative; z-index: 1000;">\
            <div class="content" style="min-width: 0">\
                <h3 id="message-title"></h3>\
                <div id="message-body" class="text"></div>\
                <div class="submit"><a id="message-left-button" href="#" class="close fleft" style="float:right !important;">' + this.leftButton + '</a><a id="message-right-button" href="#" class="close choose" style="float:left !important;">' + this.rightButton + '</a></div>\
            </div>\
        </div>\
    ').appendTo('body');
}

/**
 * Функция для настройки и отображения диалога
 */
dlgMessage.prototype.show = function(confirm, body, callback, title, rightButton, leftButton){
    
    var self = this.dialog;
    
    // показываем/скрываем левую клавишу
    this.dialog.find('.fleft').toggle(confirm);
    if (confirm) {
        this.dialog.find('.fleft').toggleClass('choose', confirm);
        this.dialog.find('#message-right-button').toggleClass('choose', false);
    } else {
        this.dialog.find('#message-right-button').toggleClass('choose', confirm);
    }
    
    // устанавливаем значения по умолчанию
    if (title === undefined) {
        
        title = this.title;
    }
    if (rightButton === undefined) {
        
        rightButton = confirm ? this.rightButton : this.button;
    }
    if (leftButton === undefined) {
        
        leftbutton = this.leftButton;
    }
    var is_callable = $.isFunction(callback);
    
    // переопределяем текстовые параметры диалога
    this.dialog.find('#message-title').empty().append('<span class="close"></span>' + title);
    this.dialog.find('#message-body').empty().append(body);
    this.dialog.find('#message-left-button').text(leftButton);
    this.dialog.find('#message-right-button').text(rightButton);
    
    // создаем #overlay и располагаем форму по середине экрана
    this.dialog.overlay().centering();
    
    // переопределяем событие закрытия диалога
    this.dialog.find('.close').unbind('click').click(function(){
        
        var result = false;
        if ($(this).hasClass('fleft')) {
            
            result = true;
        }
        
        $(this).parents('.popup').hide();
        $('#overlay').remove();
        
        if (is_callable) {
            
            callback(result);
        }
        
        return false;
    });
    
    // при нажатии на закрывающий див, надо вызвать нажатие кнопки Нет
    $('#overlay').click(function(){
        
        if (is_callable) {
            
            callback(false);
        }
    });
    
    // поехали
    return this.dialog.show();
};

/**
 * Переопределяем стандартную функцию alert
 */
window.stdAlert = window.alert;
window.alert = function (body, callback, button, title){
    
    return window.dlgMessage.show(false, body, callback, title, button);
};

/**
 * Переопределяем стандартную функцию confirm
 */
window.confirm = function (body, callback, leftButton, rightButton, title){
    
    return window.dlgMessage.show(true, body, callback, title, rightButton, leftButton);
};

/**
 * Вызов окна о том, что пользователю необходимо авторизоваться или зарегистрироваться
 */
window.authShowDialog = function (message) {
    
    // обязательно, чтобы не получить перекрытие
    $('#overlay').remove();
    $('.popup').hide();
    
    // стандартным образом вызываем alert
    alert(
        message + ' Вы можете <a class="close" href="#">авторизоваться</a> или <a class="close" href="#">зарегистрироваться</a>.',
        undefined,
        undefined,
        'Авторизация').find('#message-body .close')
    .eq(0).click(function(){
        
        // показываем окно авторизации
        $('#popupLogin').overlay().centering().show();
        return false;
    }).end()
    .eq(1).click(function(){
        
        // показываем окно первого шага регистрации
        $('#popupRegistrationConfirm').overlay().centering().show();
        return false;
    });
};

function dlgAnimate(){

    this.isVisible = false;

    this.element = $('\
        <div class="pp_load" style="display:none">\
            <div class="img"><img src="/i/preloader.gif" width="150" height="150" alt="" /></div>\
            <div class="text"></div>\
        </div>\
    ');
}

dlgAnimate.prototype.show = function(text){

    this.element.find('.text').text('RuTraveller ' + text + '...').end().appendTo('body').overlay_white().centering().show();
    this.isVisible = true;
};

dlgAnimate.prototype.hide = function(){
    
    $('#overlay_white').remove();
    this.element.detach().hide();
    this.isVisible = false;
};

dlgAnimate.prototype.display = function(text){

    if (!this.isVisible) {

        this.element.find('.text').text('RuTraveller ' + text + '...').end().appendTo('body').overlay_white().centering().show();
        this.isVisible = true;
    }
};

/**
 * После загрузки страницы создаем общий объект для работы с сообщениями
 */
$(document).ready(function(){
    
    window.dlgMessage = new dlgMessage();
    window.dlgAnimate = new dlgAnimate();
});