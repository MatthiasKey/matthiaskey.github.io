emailjs.init("M4yIYk_XzhtebDMsB");

const sendEmail = async (event) => {
  event.preventDefault();

  const form = event.target;

  try {
    const response = await emailjs.sendForm(
      "service_b8s1edb",
      "template_khwsisv",
      form,
    );
    window.alert("Thank you for your submission. You will be returned to the home page.");
    window.location.href = "../index.html";
    console.log("Email sent successfully!", response);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("contact-form")
    .addEventListener("submit", sendEmail);
});

/* (2/29/26 I could not get the following to work)
//Google AI How to add onsubmit handler in javascript
// 1. Get a reference to the form element
const form = document.getElementById("contact-form");
const output = document.getElementById("output");

// 2. Define the handler function
function handleSubmit(event) {
    // Prevent the default form submission (page reload)
    event.preventDefault(); 
    
    // You can access form data here
    const username = document.getElementById("email").value;
    console.log("Submitted email:", email);

    // Example: Display output to the user
    output.textContent = `Form submitted! Email: ${email}`;

    //https://html.form.guide/snippets/google-recaptcha-javascript-validation/ 
    // The HTML code above only displays the Captcha. In order to verify that the user is not a “bot” we have to first verify in the client side and then on the server side.
    //Here is the client side validation:

    document.getElementById("contact-form").addEventListener("submit",function(evt) {
    
    var response = grecaptcha.getResponse();
    if(response.length == 0) 
    { 
      reCaptcha not verified
      alert("please verify you are humann!"); 
      evt.preventDefault();
      return false;
    }
    //captcha verified
    //do the rest of your validations [or actions] here
    window.alert("next we will send the info to EmailJS");
    //sendEmail();

    //});
    
}

// 3. Attach the event listener
form.addEventListener("submit", handleSubmit); //
*/

