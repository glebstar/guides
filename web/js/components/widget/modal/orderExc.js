/**
 * Created by gleb on 29.01.2016.
 */

$(document).ready(function(){
    var toog = false;

    var jqOrderExcPopup = $('#pp-exc-ord'),
        jqOrderExcId = $('#pp-exc-ord-exc-name', jqOrderExcPopup),
        jqOrderExcCountry = $('.order-exc-sel-country_id', jqOrderExcPopup),
        jqOrderExcCity = $('.order-exc-sel-city_id', jqOrderExcPopup),
        jqOrderExcDate = $('.order-exc-sel-data', jqOrderExcPopup),
        jqOrderExcPrice = $('.order-exc-sel-price', jqOrderExcPopup),
        jqOrderExcAdults = $('.order-exc-sel-adults', jqOrderExcPopup),
        jqOrderExcChild = $('.order-exc-sel-child', jqOrderExcPopup),
        jqOrderExcInfo = $('.order-exc-sel-info', jqOrderExcPopup),
        jqOrderExcName = $('.order-exc-sel-name', jqOrderExcPopup),
        jqOrderExcPhone = $('.order-exc-sel-phone', jqOrderExcPopup),
        jqOrderExcEmail = $('.order-exc-sel-email', jqOrderExcPopup),
        jqOrderExcBtnSubmit = $('.custom-btn-submit', jqOrderExcPopup),
        jqOrderExcBtnCancel = $('.popup15-submit-btn-cancel, .custom-btn-cancel, .popup15-ttl-x', jqOrderExcPopup),

        getData = function(){
            var data = {
                'excDate': jqOrderExcDate.pVal(),
                'price': jqOrderExcPrice.pVal(),
                'countBig': jqOrderExcAdults.pVal(),
                'countSmall': jqOrderExcChild.pVal(),
                'excComment': jqOrderExcInfo.pVal(),
                'name': jqOrderExcName.pVal(),
                'phone': jqOrderExcPhone.pVal(),
                'email': jqOrderExcEmail.pVal()
            };

            data.excId = jqOrderExcId.attr('data-exc-id');
            if(data.excId < 1) {
                data.country = jqOrderExcCountry.attr('data-country-id');
                data.city = jqOrderExcCity.attr('data-city-id');
            }

            return data;
        };

    $('.show-order-exc-popup').click(function(){
        jqOrderExcPopup.overlay().centering().show();
        $('#pp-exc-ord-geo').show();
        $('#pp-exc-ord-exc-name').attr('data-exc-id', '0').hide();

        if($(this).attr('data-exc-id')) {
            $('#pp-exc-ord-geo').hide();
            $('#pp-exc-ord-exc-name b').html($(this).attr('data-exc-name'));
            $('#pp-exc-ord-exc-name').attr('data-exc-id', $(this).attr('data-exc-id')).show();
        }

        if(toog) {
            toog = false;
            $('.popup15-cont, .popup15-submit-btn-red22, .popup15-submit-btn-cancel', jqOrderExcPopup).toggle();
        }
    });

    jqOrderExcBtnCancel.click(function(event){
        $('#overlay').remove();
        jqOrderExcPopup.hide();
        event.preventDefault();
    });

    jqOrderExcDate.datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy",
        constrainInput: false,
        firstDay: 1,
        minDate: 0
    }).prev().click(function(){
        jqOrderExcDate.datepicker( "show" );
    });

    $('#pp-exc-ord-countries .pp-exc-ord-li a').click(function(){
        excOrderSetCountry(this);
    });

    var stop = false;
    jqOrderExcBtnSubmit.click(function(event){
        $.post('/main/addorderexc', getData(), function(data){
            if(data.status == 'OK') {
                stop = false;
                toog = true;
                $('.popup15-cont, .popup15-submit-btn-red22, .popup15-submit-btn-cancel', jqOrderExcPopup).toggle();
            } else {
                alert(data.message);
                stop = false;
            }
        }, 'json');

        event.preventDefault();
    });
});

function excOrderSetCountry(obj) {
    var country_id = $(obj).attr('data-country-id');

    $('.order-exc-sel-country_id', $('#pp-exc-ord')).val($(obj).html());
    $('.order-exc-sel-country_id', $('#pp-exc-ord')).attr('data-country-id', country_id);
    $('#pp-exc-ord-countries').hide();

    $('#pp-exc-ord-cities').html( $('#order-exc-country-' + country_id).html() );
    $('.order-exc-sel-city_id', $('#pp-exc-ord')).val('Город или курорт').attr('data-city-id', 0);
}

function excOrderSetCity(obj) {
    var city_id = $(obj).attr('data-city-id');
    $('.order-exc-sel-city_id', $('#pp-exc-ord')).val($(obj).html());
    $('.order-exc-sel-city_id', $('#pp-exc-ord')).attr('data-city-id', city_id);
    $('#pp-exc-ord-cities').hide();
}