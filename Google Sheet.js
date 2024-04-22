
const scriptURL = 'https://script.google.com/macros/s/AKfycbxAXXKJqTEN6I3aoZ2H47sa8-5bKlTzYiSB6Hfr0OkQLJh9wl9hqfFRgyIVq7OnhrJALg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
