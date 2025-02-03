document.addEventListener('DOMContentLoaded', function() {


    const searchButton = document.getElementById('search-btn');
    const searchEngine = document.getElementById('search-engine');
    const carSelect = document.getElementById('car-select');
    const locationSelect = document.getElementById('location-select');
    
    searchButton.addEventListener('click', function() {
        const query = searchEngine.value;
        const carType = carSelect.value;
        const location = locationSelect.value;

        if (!query || !carType || !location) {
            alert("Please fill out all fields before searching.");
            return;
        }
        
       
        alert(`Searching for: ${query} | ${carType} | ${location}`);
    });

   
    const reviewForm = document.getElementById('review-form');
    
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const name = document.getElementById('name').value;
        const review = document.getElementById('review').value;
        const rating = document.getElementById('rating').value;

        if (!name || !review || !rating) {
            alert("Please fill out all fields before submitting your review.");
            return;
        }

        
        alert(`Thank you for your review, ${name}! You rated us ${rating} stars.`);

        
        reviewForm.reset();
    });

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

  
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    navLinksItems.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); 
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, 
                    behavior: 'smooth'
                });
            }
        });
    });
});