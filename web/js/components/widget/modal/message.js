/**
 * Created by gleb on 26.01.2016.
 */

$(document).ready(function(){
    var jqMessagePopup = $('#pp-message'),
        jqMessageText = $('.pp-mesage-text', jqMessagePopup),
        jqMessageSent = $('.pp-message-btn', jqMessagePopup),
        jqMessageClose = $('.pp-message-close', jqMessagePopup);

    jqMessageClose.click(function(){
        jqMessagePopup.hide();
    });

    // закрыть окно при клике вне его
    $(document).click(function(event) {
        if ($(event.target).closest("#pp-message").length) return;
        jqMessagePopup.hide();
        event.stopPropagation();
    });

    jqMessageSent.click(function(){
        var sentData = {
            message: jqMessageText.val()
        };

        $.post('/main/addmessage', sentData, function(data){
            if(data.status == 'OK') {
                jqMessagePopup.hide();
                alert('Ваше сообщение добавлено!')
            } else {
                alert(data.message);
            }
        }, 'json');

        return false;
    });
});
