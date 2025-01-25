document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("search-btn");
    const searchEngine = document.getElementById("search-engine");
    const carSelect = document.getElementById("car-select");
    const locationSelect = document.getElementById("location-select");

    searchBtn.addEventListener("click", () => {
        const searchTerm = searchEngine.value.trim();
        const carType = carSelect.value;
        const location = locationSelect.value;

        if (searchTerm || carType || location) {
            alert(`Searching for: ${searchTerm} \nCar Type: ${carType} \nLocation: ${location}`);
        } else {
            alert("Please fill in at least one search field.");
        }
    });

    const reviewForm = document.getElementById("review-form");
    const reviewName = document.getElementById("name");
    const reviewText = document.getElementById("review");
    const reviewRating = document.getElementById("rating");

    reviewForm.addEventListener("submit", (event) => {
        event.preventDefault(); 
        
        const name = reviewName.value.trim();
        const review = reviewText.value.trim();
        const rating = reviewRating.value;

        if (name && review && rating) {
            alert(`Thank you for your review, ${name}! \nRating: ${rating} stars\nReview: ${review}`);
            reviewForm.reset(); 
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });

    const customerSupportText = document.getElementById("customer-support-text");
    const customerSupportImage = document.getElementById("customer-support-image");

    customerSupportText.addEventListener("click", () => {
        if (customerSupportImage.style.display === "none") {
            customerSupportImage.style.display = "flex";
        } else {
            customerSupportImage.style.display = "none";
        }
    });
});
