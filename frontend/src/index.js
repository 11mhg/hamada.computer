
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
                console.log("Message has been sent and received");
            }
            console.log(this.readyState);
        }

        xhr.send( JSON.stringify(emailOpts));

        console.log("XHR sent");

        console.log(serverURL);

        submitButton.className = 'primary disabled'
    }
    return false;
}

window.submitEmail = submitEmail;