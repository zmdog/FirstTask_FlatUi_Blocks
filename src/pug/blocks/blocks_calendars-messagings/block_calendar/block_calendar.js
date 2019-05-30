
$(document).ready(()=>{

    let calendars = $('.block_calendar');

    $(calendars).each(function(index){


        $(this).children('.calendar').datepicker({
            inline: true,
            firstDay: 2,
            showOtherMonths: true,
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            onSelect: function() {
                let currentDate = $(calendars[index]).children('.calendar').datepicker('getDate');

                $(calendars[index]).children('.ui-widget-content-day')
                                   .children('p').text($.datepicker.formatDate('d', currentDate));
            }
        });

        let currentDay = $(this).find('.ui-datepicker-current-day').children('a').text(),
            currentDate = new Date();

        $(this).children('.ui-widget-content-day').children('p').text(currentDay);

        $(this).find('.ui-widget-content-btn').on('click', ()=>{
            $(calendars[index]).children('.calendar').datepicker('setDate', currentDate);
            $(calendars[index]).children('.ui-widget-content-day').children('p').text(currentDate.getDate());
        })
    });

});