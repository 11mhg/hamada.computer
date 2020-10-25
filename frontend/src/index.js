

let contactForm = document.getElementById('contact_form');

function submitEmail(){
    let submitButton = document.getElementById('contact_submit');

    if (!submitButton.className.includes('disabled')){
        console.log(contactForm.elements['email'].value);
        console.log(contactForm.elements['name'].value);
        console.log(contactForm.elements['message'].value);
        submitButton.className = 'primary disabled'
    }
    return false;
}

window.submitEmail = submitEmail;