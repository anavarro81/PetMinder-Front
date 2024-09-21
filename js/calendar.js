const CurrentDate = new Date()
const monthYear$$ = document.getElementById("monthYear")
const daysOfWeek$$ = document.getElementById("daysOfWeek")

const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
    
    

console.log('CurrentDate', CurrentDate);

monthYear$$.innerHTML = ` ${monthNames[CurrentDate.getMonth()]}  ${CurrentDate.getFullYear()}`

let daysHeader = ''

for (const day of daysOfWeek) {
    daysHeader = daysHeader + `<div class="text-center font-blod"> ${day} </div>`
}

console.log('>> daysHeader : ', daysHeader)

daysOfWeek$$.innerHTML = daysHeader 



