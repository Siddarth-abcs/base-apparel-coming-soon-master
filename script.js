function validateEmail() {
    const emailInput = document.getElementById("email");
    const validationMessage = document.querySelector(".invalid-msg"); // Changed to class selector
    const errorIcon = document.querySelector("#dengar"); // Changed to id selector
  
    // Regular expression to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(emailInput.value)) {
        console.log("done");
        errorIcon.style.display = "block";
        validationMessage.style.display = "block";
        return false;
    }
  
    errorIcon.style.display = "none";
    validationMessage.style.display = "none";
    
    console.log("fake");
    return true;
}
