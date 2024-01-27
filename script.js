import { format } from 'date-fns'

const datePickerButton = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')
const datePickerHeaderText = document.querySelector('.current-month')

datePickerButton.addEventListener('click', () => {
    datePicker.classList.toggle('show')
    setupDatePicker(date)
})

function setDate(date) {
    datePickerButton.innerText = format(date, 'MMMM do, yyyy')
}

setDate(new Date())
