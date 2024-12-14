function thankYouTemplate() {
    return `
    <div class="thank-you">
        <h2>Thank You!</h2>
        <p>Your submission has been received, we will contact you soon.</p>
    </div>
    `;
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    form.style.display = "none";
    document.getElementById("thank-you").style.display = "block";
});
