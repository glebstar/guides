/**
 * Created by gleb on 29.01.2016.
 */

$(document).ready(function(){
    var jqOrderExcPopup = $('#pp-exc-ord'),
        jqOrderExcBtnCancel = $('.popup15-submit-btn-cancel, .popup15-ttl-x', jqOrderExcPopup);

    $('.show-order-exc-popup').click(function(){
        jqOrderExcPopup.overlay().centering().show();
    });

    jqOrderExcBtnCancel.click(function(event){
        $('#overlay').remove();
        jqOrderExcPopup.hide();
        event.preventDefault();
    });
});