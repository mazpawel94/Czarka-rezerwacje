const add = document.getElementById('addForm');
const reservationDay = document.querySelector('#date.picker-input');
const formDay = document.getElementById('day');
const reservationHour = document.querySelector('#time.td-input');
const formHour = document.getElementById('hour');
const addReservation = document.querySelector('.addReservation'); 


function setDateInForm() {
    formDay.value = reservationDay.value;
    formHour.value = reservationHour.value;

}

addReservation.addEventListener('click', function(){
    add.classList.toggle('active');
    setDateInForm();
});

tables.forEach( (e) => {
    if (e.classList.contains('busyNow')) {
        $(`#${e.classList[1]}`)[0].value = false;
    }
    else {
        $(`#${e.classList[1]}`)[0].value = true;
    }
});

$('.table').on('click', function() {
    const name = this.classList[1];
    if($(this).hasClass('busyNow')) {
        $(`#${name}`)[0].value = true;
        this.classList.remove('busyNow');
     }
    else{
        console.log(this.classList[1]);
        $(`#${name}`)[0].value = false;
        console.log( $(`#${name}`));
        this.classList.add('busyNow');
     }

});

calendarPage.addEventListener('click', setDateInForm);
clock.addEventListener('click', setDateInForm);

