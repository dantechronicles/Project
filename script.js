document.getElementById("newsletter-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    setTimeout(() => {
        const successMessage = document.getElementById("success-message");
        successMessage.textContent = `Thank you for subscribing, ${email}!`;
        successMessage.style.display = "block";
        document.getElementById("email").value = "";
    }, 1000);
});
const reviews = [
    {
        avatar: "./IMAGES/woman (1).png",
        name: "Jane Cooper",
        date: "12/4/17",
        text: "I had an amazing experience with Dante Car Imports! From the moment I inquired about a vehicle to the day it was delivered, their team was professional, transparent, and extremely helpful. The car was exactly as advertised, in excellent condition, and at a competitive price. They handled all the importation logistics smoothly, saving me time and hassle. I highly recommend Dante Car Imports to anyone looking for a reliable and trustworthy car dealer!",
    },
    {
        avatar: "./IMAGES/man.png",
        name: "John Doe",
        date: "10/3/17",
        text: "Dante Car Imports exceeded my expectations! The process was seamless, and they kept me updated every step of the way. Their customer service is top-notch, and they ensured my car arrived on time and in perfect condition. I appreciated their honesty and commitment to quality. If you're looking for a stress-free car importation experience, Dante Car Imports is the way to go!",
    },
    {
        avatar: "./IMAGES/man (1).png",
        name: "Mary Jane",
        date: "8/2/17",
        text: "I was hesitant about importing a car, but Dante Car Imports made the process so easy and stress-free. Their team was knowledgeable, responsive, and professional throughout the entire process. The car I received was in perfect condition, and the price was very competitive. I highly recommend Dante Car Imports to anyone looking to import a car!",
    },
    {
        avatar: "./IMAGES/woman.png",
        name: "Alice Smith",
        date: "5/1/17",
        text: "Dante Car Imports is the best in the business! They helped me find the perfect car and handled all the importation details with ease. The car arrived on time and in excellent condition. Their customer service is outstanding, and I will definitely use them again in the future!",
    },
];

const mainReviewAvatar = document.querySelector(".main-review .avatar img");
const mainReviewContent = document.querySelector(".main-review .review-content p");
const mainReviewAuthor = document.querySelector(".main-review .review-author");
const mainReviewDate = document.querySelector(".main-review .review-date");

const avatarIcons = document.querySelectorAll(".avatars-container .avatar-icon");

function updateMainReview(index) {
    const review = reviews[index];
    mainReviewAvatar.src = review.avatar;
    mainReviewContent.textContent = review.text;
    mainReviewAuthor.textContent = review.name;
    mainReviewDate.textContent = review.date;
}

avatarIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        updateMainReview(index);
    });
});

document.getElementById("search-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const carType = document.getElementById("car-select").value;
    const location = document.getElementById("location-select").value;

    if (carType && location) {
        alert(`Searching for ${carType} in ${location}...`);
    } else {
        alert("Please select both car type and location.");
    }
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links ul");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}