import { addMonths, format, fromUnixTime, getUnixTime, subMonths } from 'date-fns'

const datePickerButton = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')
const datePickerHeaderText = document.querySelector('.current-month')
const prevMonthButton = document.querySelector('.prev-month-button')
const nextMonthButton = document.querySelector('.next-month-button')
let currentDate = new Date()

datePickerButton.addEventListener('click', () => {
    datePicker.classList.toggle('show')
    const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
    currentDate = selectedDate
    setupDatePicker()
})

function setDate(date) {
    datePickerButton.innerText = format(date, 'MMMM do, yyyy')
    datePickerButton.dataset.selectedDate = getUnixTime(date)
}

function setupDatePicker(selectedDate) {
    datePickerHeaderText.innerText = format(currentDate, 'MMMM - yyyy')
    setupDates(selectedDate)
}
function setupDates(_selectedDate) {

}

nextMonthButton.addEventListener('click', () => {
    currentDate = addMonths(currentDate, 1)
    setupDatePicker()
})
 
prevMonthButton.addEventListener('click', () => {
    currentDate = subMonths(currentDate, 1)
    setupDatePicker()
})


setDate(new Date())

console.log(__dirname.small())