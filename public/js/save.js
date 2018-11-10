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

calendarPage.addEventListener('click', setDateInForm);
clock.addEventListener('click', setDateInForm);

