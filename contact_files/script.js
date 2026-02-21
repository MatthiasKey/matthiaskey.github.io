  emailjs.init("M4yIYk_XzhtebDMsB");

  const sendEmail = async (event) => {
    event.preventDefault();

    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]'); // Get the button
    const originalBtnText = submitBtn.innerText; // Save original text

    // Get the reCAPTCHA response token
    const captchaResponse = grecaptcha.getResponse();

    // Check if the user has actually checked the box
    if (captchaResponse.length === 0) {
      window.alert("Please complete the 'I'm not a robot' verification.");
      return; // Exit the function early
    }

    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    try {
      const response = await emailjs.sendForm(
        "service_b8s1edb",
        "template_khwsisv",
        form,
      ); //
      window.alert("Thank you for your submission. You will be returned to the home page.");
      window.location.href = "../index.html";
      console.log("Email sent successfully!", response);
    } catch (error) {
      console.error("Failed to send email:", error);
      window.alert("Something went wrong. Please try again.");
      // Reset State on Error
      submitBtn.disabled = false;
      submitBtn.innerText = originalBtnText;
      grecaptcha.reset(); // Reset captcha so they can re-verify
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    document
      .getElementById("contact-form")
      .addEventListener("submit", sendEmail);
  });

