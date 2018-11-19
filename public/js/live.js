
const tables = document.querySelectorAll('.table');
const tablesNow = document.querySelector('.tablesNow');

eval('var obj='+tablesNow.textContent);
tables.forEach( (e) => {
    const table = e.classList[1];
    console.log(table);
    if(eval('obj.'+table)) {
        e.classList.add('freeNow');
    }
    else {
        e.classList.add('busyNow');
    }
    
});
