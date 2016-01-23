<div class="page-ttl">
    <h3 class="page-ttl-h3">Календарь занятости гида</h3>
</div>
<div id="datepicker1"></div>

<script>
    $(function() {
        var datesGreen=['17/12/2015','18/12/2015','19/12/2015','20/12/2015','21/12/2015','22/12/2015','23/12/2015','24/12/2015','25/12/2015','26/12/2015','27/12/2015','28/12/2015','1/1/2016','3/1/2016','4/1/2016','5/1/2016','6/1/2016','7/1/2016','8/1/2016','9/1/2016','10/1/2016','11/1/2016','12/1/2016','13/12/2016']
        var datesRed=['29/12/2015','30/12/2015','31/12/2015','2/1/2016']
        $( "#datepicker1" ).datepicker({
            inline: true,
            numberOfMonths: 2,
            showButtonPanel: false,
            beforeShowDay: function (date) {
                var theday = date.getDate() +'/'+ + (date.getMonth()+1) + '/' + date.getFullYear();
                var cl = "";
                if ($.inArray(theday, datesGreen) >=0) {
                    cl = "specialDateGreen";
                } else {
                    if ($.inArray(theday, datesRed) >=0) {
                        cl = "specialDateRed";
                    };
                };
                return [true,cl];
            }
        });

    });
</script>