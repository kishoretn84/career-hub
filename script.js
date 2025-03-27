document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".enroll-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Thank you for enrolling! You'll receive course details soon.");
        });
    });
});

