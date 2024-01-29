import { startOfMonth, addMonths, format, fromUnixTime, getUnixTime, startOfWeek, subMonths, endOfMonth, endOfWeek, eachDayOfInterval } from 'date-fns'

const datePickerButton = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')
const datePickerHeaderText = document.querySelector('.current-month')
const prevMonthButton = document.querySelector('.prev-month-button')
const nextMonthButton = document.querySelector('.next-month-button')
const datePickerGridDates = document.querySelector('.date-picker-grid-dates')
let currentDate = new Date()

datePickerButton.addEventListener('click', () => {
    datePicker.classList.toggle('show')
    const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
    currentDate = selectedDate
  setupDatePicker(selectedDate)
})

function setDate(date) {
  datePickerButton.innerText = format(date, "MMMM do, yyyy")
  datePickerButton.dataset.selectedDate = getUnixTime(date)
}

function setupDatePicker(selectedDate) {
    datePickerHeaderText.innerText = format(currentDate, 'MMMM - yyyy')
    setupDates(selectedDate)
}
function setupDates(selectedDate) {
    const fistWeekStart = startOfWeek(startOfMonth(selectedDate))
    const lastWeekEnd = endOfWeek(endOfMonth(selectedDate))
    const dates = eachDayOfInterval({ start: fistWeekStart, end: lastWeekEnd }, {})
    datePickerGridDates.innerHTML = ''
    dates.forEach(date => {
        const dateElement = document.createElement('button')
        dateElement.classList.add('date')
        dateElement.innerText = date.getDate()
        datePickerGridDates.appendChild(dateElement)
    })
    console.log('here')
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
