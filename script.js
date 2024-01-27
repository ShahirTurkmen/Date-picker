const datePickerButton = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')

datePickerButton.addEventListener('click', () => {
    datePicker.classList.toggle('show')
})