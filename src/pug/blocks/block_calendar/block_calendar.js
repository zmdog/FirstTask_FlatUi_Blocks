
$(document).ready(()=>{
    $( ".calendar" ).datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        onSelect: function() {
            let currentDate = $('.calendar').datepicker('getDate');
            $('.ui-widget-content-day').children('p').text($.datepicker.formatDate("d", currentDate));
        }
    });
});