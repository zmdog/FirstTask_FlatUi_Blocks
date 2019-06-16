
$(document).ready(()=>{

    $('.block_calendar').each(function(index, elem){

        $(this).children('.calendar').datepicker({
            inline: true,
            firstDay: 2,
            showOtherMonths: true,
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            onSelect: function() {

                // The date change when you click
                let currentDate = $(elem).children('.calendar').datepicker('getDate');
                $(elem).children('.ui-widget-content-day')
                                   .children('p').text($.datepicker.formatDate('d', currentDate));
            }
        });

        let currentDay = $(this).find('.ui-datepicker-current-day').children('a').text(),
            currentDate = new Date();

        $(this).children('.ui-widget-content-day').children('p').text(currentDay);

        // Button TODAY
        $(this).find('.ui-widget-content-btn').on('click', ()=>{
            $(elem).children('.calendar').datepicker('setDate', currentDate);
            $(elem).children('.ui-widget-content-day').children('p').text(currentDate.getDate());
        })
    });

});