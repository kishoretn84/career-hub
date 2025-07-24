// Smooth Scrolling
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Alert on Get Started
    const getStartedBtn = document.querySelector(".btn.btn-warning");
    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", function () {
            alert("Start exploring career paths and skills!");
        });
    }

    // Career Recommendation
    const careerForm = document.querySelector("#careerForm");
    if (careerForm) {
        careerForm.addEventListener("submit", function (event) {
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
    }

    // Job Search
    const searchBtn = document.querySelector("#searchJobs");
    if (searchBtn) {
        searchBtn.addEventListener("click", function () {
            const jobQuery = document.querySelector("#jobQuery").value.trim();
            if (jobQuery) {
                const jobSearchUrl = `https://www.glassdoor.com/Job/jobs.htm?sc.keyword=${encodeURIComponent(jobQuery)}`;
                window.open(jobSearchUrl, "_blank");
            } else {
                alert("Please enter a job title to search.");
            }
        });
    }
});

// Firebase OTP Authentication
const firebaseConfig = {
    apiKey: "AIzaSyCjawj",
    authDomain: "career-hub-20458.firebaseapp.com",
    projectId: "career-hub-20458",
    storageBucket: "career-hub-20458.appspot.com",
    messagingSenderId: "741304763324",
    appId: "1:74130763324:web:476dd83d34c8b3a61b9",
    measurementId: "G-9904BZ8NXD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let confirmationResult;

window.onload = function () {
    firebase.auth().useDeviceLanguage();

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: function (response) {
            // reCAPTCHA solved
        }
    });

    recaptchaVerifier.render().then(widgetId => {
        window.recaptchaWidgetId = widgetId;
    });
};

// Send OTP Handler
function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const appVerifier = window.recaptchaVerifier;

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (result) {
            confirmationResult = result;
            document.getElementById('otpSection').style.display = 'block';
            document.getElementById('phoneSection').style.display = 'none';
            alert("OTP sent to " + phoneNumber);
        })
        .catch(function (error) {
            alert("Error sending OTP: " + error.message);
        });
}

// Verify OTP Handler
function verifyOtp() {
    const otp = document.getElementById('otpCode').value;

    confirmationResult.confirm(otp)
        .then(function (result) {
            alert("Login successful!");
            document.getElementById('loginModal').style.display = 'none';
        })
        .catch(function (error) {
            alert("Invalid OTP. Try again.");
        });
}
