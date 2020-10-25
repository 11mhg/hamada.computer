
const serverURL = location.protocol + '//' + location.host;

let contactForm = document.getElementById('contact_form');

function submitEmail(){
    let submitButton = document.getElementById('contact_submit');

    if (!submitButton.className.includes('disabled')){
        const emailOpts = {
            from: contactForm.elements['email'].value,
            subject: 'Contact Email from ' + contactForm.elements['name'].value,
            text: contactForm.elements['message'].value
        }

        var xhr = new XMLHttpRequest();

        xhr.open("POST", serverURL + '/api/mail', true);

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onreadystatechange = function(){
            if (this.readyState === XMLHttpRequest.DONE && this.status===200){
                contactForm.elements['email'].disabled  = true;
                contactForm.elements['name'].disabled   = true;
                contactForm.elements['message'].disabled=true;
                console.log("Message has been sent and received.");
            }
        }

        xhr.send( JSON.stringify(emailOpts));

        console.log("Email Sent!");

        submitButton.className = 'primary disabled'
    }
    return false;
}

window.submitEmail = submitEmail;