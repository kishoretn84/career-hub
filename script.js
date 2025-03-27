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
    const jobQuery = document.querySelector("#jobQuery").value;
    if (jobQuery) {
        const jobSearchUrl =  https://www.glassdoor.com/Job/jobs.htm?sc.keyword=${encodeURIComponent(jobQuery)};
        window.open(jobSearchUrl, "_blank");
    } else {
        alert("Please enter a job title to search.");
    }
});
