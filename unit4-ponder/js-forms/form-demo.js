// form-demo.js
function validateForm(event) {
    // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
    const theForm = event.target;
    // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
    // To keep it from happening we can can call e.preventDefault()
    // You should always give feedback to the user about what whet wrong so they can fix it. We will store the error messages here
    const errors = [];
    // start by assuming the form is valid.
    let isValid = true;

    // add our validations here
    if (theForm.elements['fullName'].value !== 'Bob') {
        isValid = false;
        errors.push('Invalid full name');
    }
    if (paymentMethod.value == "credit-card"  && theForm.elements['creditCardNumber'].value !== "1234123412341234") {
        isValid = false;
        errors.push('Invalid credit card number');
    }

    // if we ran into any problems above valid will be false.
    if (!isValid) {
        //stop the form from being submitted
        event.preventDefault();
        // show the errors
        showErrors(errors);
        // return false to let the browser know the form was not submitted.
        return false;
    }
}

function togglePaymentDetails(e) {
    // get a reference to the form. We can access all the named form inputs through the form element.
    const theForm = document.getElementById('checkoutForm');
    // we will also need the creditCardContainer and paypalUsernameContainer
    const creditCardContainer = document.getElementById('creditCardSection');
    const paypalContainer = document.getElementById('paypalSection');

    // Hide payment containers by adding the '.hide' class to each of them
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");

    // Disable required for payment fields...if we hide a required field the browser will throw an error when we try to submit!
    theForm.creditCardNumber.required = false;
    theForm.paypalUsername.required = false;

    // Show the container based on the selected payment method, and add the required attribute back.
    if (paymentMethod.value == "credit-card") {
        creditCardContainer.classList.remove("hide");
        theForm.creditCardNumber.required = true;
    } else {
        paypalContainer.classList.remove("hide");
        theForm.paypalUsername.required = true;
    }
}

// helper function to display our errors.
function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
}

// attach a change event handler to the paymentMethod input
const paymentMethod = document.getElementById('payment-method');
paymentMethod.addEventListener('change', togglePaymentDetails);
togglePaymentDetails();

// attach a submit event handler to the form
document.getElementById('checkoutForm').addEventListener('submit', validateForm);