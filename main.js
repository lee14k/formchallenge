const button = document.getElementById('submit')
button.disabled =  true
var letters = /^[A-Za-z]+$/;

const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')


function filledOut () {
    if (firstName.value.match(letters) && lastName.value.match(letters)) {
        return button.disabled = false
    } }

    firstName.addEventListener("input", filledOut)
    lastName.addEventListener("input", filledOut)

    const checkBox = document.getElementById('check')
    const emailBox = document.getElementById('email')

    checkBox.addEventListener('change', (e) => {
        email.classList.toggle('hidden')
    })
  const form =  document.getElementById('form')
form.addEventListener('submit', (e)=> {
        e.preventDefault();
        const formData = new FormData (form);
        const data = Object.fromEntries (formData)
        fetch ('https://jsonplaceholder.typicode.com/users', {
            method:'post',
           headers: {
            'Content-Type': 'application/JSON'
            
           },
           body:JSON.stringify(data) })
           .then (res => res.json())
           .then (data => console.log(data)
           .catch (error => console.log(error)))
})
   