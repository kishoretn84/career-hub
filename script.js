document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling effect
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
     <script>
let generatedOtp = '';

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const number = document.getElementById('mobileNumber').value;
    generatedOtp = Math.floor(1000 + Math.random() * 9000).toString(); // Random 4-digit OTP

    alert(`OTP sent to ${number}: ${generatedOtp}`); // For demo purposes only
    document.getElementById('otpSection').style.display = 'block';
});

function verifyOtp() {
    const userOtp = document.getElementById('otpInput').value;
    if (userOtp === generatedOtp) {
        alert("Login successful!");
        document.getElementById('loginModal').style.display = 'none';
    } else {
        alert("Incorrect OTP. Try again.");
    }
}
</script>


    // Alert on clicking Get Started button
    document.querySelector(".btn").addEventListener("click", function() {
        alert("Start exploring career paths and skills!");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#careerForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const interest = document.querySelector("#interest").value;
        let recommendation = "";

        if (interest === "software") {
            recommendation = "We recommend becoming a Software Engineer! Start learning at <a href='https://www.udemy.com/topic/software-development/' target='_blank'>Udemy Software Development Courses</a>.";
        } else if (interest === "data") {
            recommendation = "Consider a career as a Data Scientist! Learn more at <a href='https://www.coursera.org/courses?query=data%20science' target='_blank'>Coursera Data Science Courses</a>.";
        } else if (interest === "cybersecurity") {
            recommendation = "Explore the field of Cybersecurity! Start learning at <a href='https://www.udemy.com/course/cyber-security-for-beginners/' target='_blank'>Udemy Cybersecurity Courses</a>.";
        }

        document.querySelector("#suggestionResult").innerHTML = recommendation;
    });
});
document.querySelector("#searchJobs").addEventListener("click", function() {
    const jobQuery = document.querySelector("#jobQuery").value.trim(); // Trim spaces
    if (jobQuery) {
        const jobSearchUrl = `https://www.glassdoor.com/Job/jobs.htm?sc.keyword=${encodeURIComponent(jobQuery)}`;
        window.open(jobSearchUrl, "_blank");
    } else {
        alert("Please enter a job title to search.");
    }
});

