document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'fa',
        timeZone: 'Asia/Tehran',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
    });

    calendar.render();
});

const darkmode = new Darkmode();
darkmode.showWidget();
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    darkmode.toggle();
});
