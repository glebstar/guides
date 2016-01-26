/**
 * Created by gleb on 25.01.2016.
 */

$(document).ready(function(){
    $('.show-message-popup').click(function(){
        $('#pp-message').show().centering();
        $('.pp-mesage-text', $('#pp-message')).val('').focus();
        return false;
    });
});
