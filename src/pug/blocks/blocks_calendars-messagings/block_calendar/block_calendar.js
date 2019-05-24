
$(document).ready(()=>{
    $('.calendar').datepicker({
        inline: true,
        firstDay: 2,
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        onSelect: function() {
            let currentDate = $(this).datepicker('getDate');
            $('.ui-widget-content-day').children('p').text($.datepicker.formatDate('d', currentDate));
        }
    });
    let currentDay = $('.ui-datepicker-current-day').children('a').text(),
        currentDate = new Date();

    $('.ui-widget-content-day').children('p').text(currentDay);

    $('.ui-widget-content-btn').on('click', ()=>{
        $('.calendar').datepicker('setDate', currentDate);
        $('.ui-widget-content-day').children('p').text(currentDate.getDate());
    })
});