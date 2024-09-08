document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});


// slider image code 
let counter = 1;
let manualBtns = document.querySelectorAll('.manual-btn');

// Function to update the active button
function updateActiveButton(index) {
    manualBtns.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}

// Auto slide every 4 seconds
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    updateActiveButton(counter - 1);
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 4000);

// Add click event listeners to manual buttons
manualBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        document.getElementById('radio' + (index + 1)).checked = true;
        updateActiveButton(index);
        counter = index + 1; // Reset counter to clicked slide
    });
});


// why choose us


document.addEventListener("DOMContentLoaded", function() {
    const section = document.querySelector(".why-choose-us");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section);
});
//get in touch
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    alert('Thank you for getting in touch! We will contact you soon.');
    // Here, you can add code to send form data to a server or handle it as needed
});


// Placeholder for any future JS code
document.addEventListener('DOMContentLoaded', () => {
    console.log('Programs and Services Section Loaded');
});




// JavaScript for adding any further interactivity or animations if needed in the future
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');

    testimonials.forEach((testimonial) => {
        testimonial.addEventListener('mouseenter', () => {
            testimonial.classList.add('active');
        });

        testimonial.addEventListener('mouseleave', () => {
            testimonial.classList.remove('active');
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('#courses-list li');
    let delay = 0;

    listItems.forEach(item => {
        setTimeout(() => {
            item.classList.add('show');
        }, delay);
        delay += 200; // Adjust the delay as needed
    });
});

// upsc
function loadMoreContent() {
    const moreContent = document.querySelector('.more-content');
    const button = document.querySelector('.see-more-btn');
    
    if (moreContent.style.display === 'block') {
        moreContent.style.display = 'none';
        button.textContent = 'See More';
    } else {
        moreContent.style.display = 'block';
        button.textContent = 'See Less';
    }
}



// ugc net
// Function to toggle the visibility of the additional content
function toggleContent() {
    const moreContent = document.getElementById('more-content');
    if (moreContent.style.display === 'block') {
        moreContent.style.display = 'none';
    } else {
        moreContent.style.display = 'block';
    }
    
}

// ugc net csir

document.addEventListener('DOMContentLoaded', function () {
    // Initialize to hide content by default
    const moreContent = document.querySelector('#ugc_net_csir #more-content');
    moreContent.style.display = 'none';
    
    // Attach click event to the button
    document.querySelector('#ugc_net_csir .see-more-btn').addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            this.textContent = 'See Less';
        } else {
            moreContent.style.display = 'none';
            this.textContent = 'See More';
        }
    });
});





// scripts.js
// distance education
// JavaScript for toggling the visibility of more content
// Function to toggle the visibility of the more-content section


// Ensure this code runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the button and the content div
    const seeMoreBtn = document.querySelector('#distance_education .see-more-btn');
    const moreContent = document.querySelector('#distance_education #more-content');

    // Initialize content visibility
    moreContent.style.display = 'none';

    // Add click event listener to the button
    seeMoreBtn.addEventListener('click', () => {
        // Toggle the display of the content
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            seeMoreBtn.textContent = 'See Less'; // Change button text
        } else {
            moreContent.style.display = 'none';
            seeMoreBtn.textContent = 'See More'; // Change button text
        }
    });
});


// services section
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        // On mouse enter, apply the scale and shadow effects
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
            card.style.transform = 'scale(1.03)';
            card.style.boxShadow = '0 12px 24px rgba(0, 80, 158, 0.15)'; // Enhanced shadow effect
        });

        // On mouse leave, revert the scale and shadow to the original state
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
            card.style.transform = 'scale(1)'; // Original scale
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)'; // Original shadow
        });
    });
});


// team 

document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(20px)';
        setTimeout(() => {
            member.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            member.style.opacity = '1';
            member.style.transform = 'translateY(0)';
        }, index * 200); // Stagger the animations for each team member
    });
});

