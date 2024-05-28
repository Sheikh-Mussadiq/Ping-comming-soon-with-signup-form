const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        document.getElementById("form__error").textContent = "Please provide a valid email address";
        document.getElementById("email").value = "";
        document.getElementById("email").style.borderColor = "var(--Light-Red)";
    }

    if (emailRegex.test(email)) {
        document.getElementById("form__error").textContent = "";   
        form.submit();
    }
})