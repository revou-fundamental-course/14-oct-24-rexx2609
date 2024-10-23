// CHANGE NAME
function replaceName() {
    let name = localStorage.getItem("userName");
    
    if (!name) {
        name = prompt("Siapakah Nama Anda?", "");
        localStorage.setItem("userName", name);
    }
    
    document.getElementById("name").innerHTML = name;
}

replaceName();

// AUTOSLIDE
let slideIndex = 0;
showSlides(slideIndex); 

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Reset slideIndex kalau kelebihan
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Autoslide functionality
let slideInterval = setInterval(function() {
    plusSlides(1);
}, 5000); // 5 seconds interval for autoslide

// Pause autoslide pas kena cursor
let slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseover', () => clearInterval(slideInterval));
slideshowContainer.addEventListener('mouseout', () => slideInterval = setInterval(function() { plusSlides(1); }, 5000));

// AUTO HIDE NAVIGATION
let lastScrollTop = 0; 
const header = document.getElementById('main-header'); 

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 

    
    if (scrollTop > lastScrollTop && scrollTop > 50) { 
        header.classList.add('hidden'); 
    } else if (scrollTop < lastScrollTop) {
        header.classList.remove('hidden'); 
    }
    
    lastScrollTop = scrollTop; 
});

// VALIDATE FORM
document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();  
    validateForm(); 
}); 

function validateForm() {
    let name = document.forms["message-form"]["full-name"].value;
    let birthDate = document.forms["message-form"]["birth-date"].value;
    let gender = document.forms["message-form"]["gender"].value;
    let messages = document.forms["message-form"]["messages"].value;

    if (name === "" || birthDate === "" || gender === "" || messages === "") {
        alert("Tidak boleh ada yang kosong");
        return false
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    let currentDateTime = new Date();
    let formattedDateTime = currentDateTime.toLocaleDateString();

    document.getElementById("sender-time").innerHTML = formattedDateTime;
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}