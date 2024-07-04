
const nameRegex = /^.{3,16}$/
const lastNameRegex = /^.{3,16}$/
const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const passwordRegex = /^[a-zA-Z0-9@._-]{6,20}$/
const phoneNumberRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
const bioRegex = /^[a-z_-]{8,50}$/



const formName = document.querySelector('#fname')
const formLastName = document.querySelector('#lname')
const formEmail = document.querySelector('#email')
const formPassword = document.querySelector('#password')
const formTelephone = document.querySelector('#telephone')
const formBio = document.querySelector('#your-bio')
const submitButton = document.querySelector('#form-button')



submitButton.addEventListener('submit',function(event){
    
    event.preventDefault()
})

formName.addEventListener('keyup', function(event) {
    controlRegex(nameRegex, formName);
    controlAllRegex()
});
formLastName.addEventListener('keyup',function(event){
    controlRegex(lastNameRegex, formLastName)
    controlAllRegex()
})
formEmail.addEventListener('keyup',function(event){
    controlRegex(emailRegex,formEmail)
    controlAllRegex()
})
formPassword.addEventListener('keyup',function(event){
    controlRegex(passwordRegex,formPassword)
    controlAllRegex()
})
formTelephone.addEventListener('keyup',function(event){
    controlRegex(phoneNumberRegex,formTelephone)
    controlAllRegex()
    
})
formBio.addEventListener('keyup',function(event){
    controlRegex(bioRegex,formBio)
    controlAllRegex()
})

function controlAllRegex(){
    if (
        nameRegex.test(formName.value) &&
        lastNameRegex.test(formLastName.value) &&
        emailRegex.test(formEmail.value) &&
        passwordRegex.test(formPassword.value) &&
        phoneNumberRegex.test(formTelephone.value) &&
        bioRegex.test(formBio.value)
    ) {
        submitButton.style.backgroundColor = 'green';
        submitButton.disabled = false;
    }else{
        submitButton.disabled = true;
    }

}

function controlRegex(regex,element){
    if(!regex.test(element.value)){
        {
            console.log(element.value)
            console.log('asd')
            element.style.border = '3px solid red'
        }
    }else{
        console.log('succes')
        element.style.border = '3px solid green'
    }
}
