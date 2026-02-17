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
