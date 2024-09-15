document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});


// slider image code 

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slide-image");
    let currentIndex = 0;
    const imageCount = images.length;

    function showNextImage() {
        images[currentIndex].style.opacity = 0; // Fade out current image
        currentIndex = (currentIndex + 1) % imageCount;
        images[currentIndex].style.opacity = 1; // Fade in next image
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextImage, 2000); // Change image every 2 seconds

    // Initially set the first image to be visible
    images[currentIndex].style.opacity = 1;
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



//gallery

document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Create lightbox element
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            document.body.appendChild(lightbox);
            
            // Create img element inside lightbox
            const img = document.createElement('img');
            img.src = item.src;
            lightbox.appendChild(img);
            
            // Close lightbox on click
            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
});



// contact us



function showPopup() {
    alert('EMAIL IS OPENING');
}


//enquiry form

document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.querySelector(".form-container");

    // Simulate dynamic loading effect
    setTimeout(() => {
        formContainer.style.opacity = '1';
        formContainer.style.transform = 'translateY(0)';
    }, 500);
    
    const form = document.getElementById('enquiryForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        form.reset();
    });
});


//  faq section

function toggleFaq(element) {
    // Close all open answers
    const allFaqs = document.querySelectorAll('.faq');
    allFaqs.forEach(faq => {
        if (faq !== element.parentElement) {
            faq.classList.remove('active');
        }
    });

    // Toggle the selected FAQ
    element.parentElement.classList.toggle('active');
}


// aboutContent,missionContent,visionContent

document.addEventListener("DOMContentLoaded", function () {
    const aboutContent = "Scholar House Research Foundation is an esteemed organization dedicated to providing high-quality educational services, including UPSC online classes, UGC NET coaching, and distance education programs. The foundation aims to bridge the gap between aspiring students and their academic goals by offering accessible, affordable, and comprehensive learning solutions.";
    
    const missionContent = "To empower students by providing innovative and accessible educational resources, ensuring they are well-prepared for competitive exams such as UPSC and UGC NET. The mission is to support lifelong learners through flexible distance education options, fostering academic excellence and career advancement.";
    
    const visionContent = "To become a leading educational hub that facilitates academic success and professional growth. The vision is to create a learning environment that nurtures critical thinking, self-discipline, and knowledge, enabling students to contribute meaningfully to society while achieving their personal aspirations.";

    // Dynamic loading with delay to simulate asynchronous loading
    setTimeout(() => {
        document.getElementById("about-content").textContent = aboutContent;
    }, 500);

    setTimeout(() => {
        document.getElementById("mission-content").textContent = missionContent;
    }, 1000);

    setTimeout(() => {
        document.getElementById("vision-content").textContent = visionContent;
    }, 1500);
});



// Smooth Scroll for Links (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});






// Function to simulate dynamic loading of content free demo
document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById('free_demo');
    setTimeout(() => {
        section.style.opacity = 1; // Make the section visible after loading
    }, 500); // Adjust timing as needed
});

// Function to handle the booking of the free demo
function bookFreeDemo() {
    alert('Thank you for your interest! A representative will contact you shortly to schedule your free demo class.');
}


//our achivements

document.addEventListener("DOMContentLoaded", function() {
    const achievementSection = document.getElementById("achievements_section");
    achievementSection.style.opacity = 0;
    achievementSection.style.transition = "opacity 1.5s ease-in-out, transform 1.5s ease-in-out";
    
    // Scroll-based loading effect
    window.addEventListener("scroll", function() {
        const sectionTop = achievementSection.getBoundingClientRect().top;
        const triggerHeight = window.innerHeight / 1.2;

        if (sectionTop < triggerHeight) {
            achievementSection.style.opacity = 1;
            achievementSection.style.transform = "translateY(0)";
        }
    });
});








document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var formData = new FormData(this);

    // Create a structured message
    var messageBody = `
        Name: ${formData.get('name')}\n
        Email: ${formData.get('email')}\n
        Phone: ${formData.get('phone')}\n
        Message: ${formData.get('message')}
    `;

    // Prepare the data to be sent in a structured format
    var dataToSend = new FormData();
    dataToSend.append('name', formData.get('name'));
    dataToSend.append('email', formData.get('email'));
    dataToSend.append('phone', formData.get('phone'));
    dataToSend.append('message', messageBody);  // Use the structured message as the value for 'message'

    fetch(this.action, {
        method: this.method,
        body: dataToSend,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        console.log(response); // Log the response for inspection

        if (response.ok) {
            // Success: Show success message and reset the form
            document.getElementById('formMessage').style.display = 'block';
            document.getElementById('contactForm').reset();
        } else {
            // Handle cases where the response isn't ok
            response.json().then(function(data) {
                console.log(data); // Log the response data
                alert("Oops! There was a problem submitting your form: " + (data.error || "Unknown error"));
            });
        }
    }).catch(function(error) {
        console.error('Error:', error);
        alert("Oops! There was a network problem submitting your form.");
    });
});


