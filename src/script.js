// Navbar menjadi fixed saat di-scroll
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

  // Hamburger menu toggle
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
});


window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});


const textElement = document.getElementById('text-writer');
const textArray = [
    "Welcome to My Page",
    "Let’s Talk With Me",
    "Let’s Connect and Collaborate"
];


let textIndex = 0;
let charIndex = 0;

const typingSpeed = 100; 
const delayBetweenTexts = 1000;

function typeText() {
    if (charIndex < textArray[textIndex].length) {

    textElement.textContent = textArray[textIndex].substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeText, typingSpeed);
} else {

    setTimeout(() => {
    textElement.textContent = ""; 
        charIndex = 0;
    textIndex = (textIndex + 1) % textArray.length; 
        typeText();
    }, delayBetweenTexts);
}
}

// Mulai efek pengetikan saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    typeText();
});




// Data Contact
let dataContact = [];

// const getData = async () => {
//     try {
//         const response = await fetch("https://backend-three-tau-34.vercel.app/api/contact", {
//             method: "GET",
//         });

//         if (!response.ok) {
//             throw new Error(`Failed to fetch data: ${response.statusText}`);
//         }

//         const data = await response.json();

//         dataContact = [...data];
//         console.log("Fetched Data:", dataContact);
//         renderData();
//     } catch (err) {
//         console.error("Unexpected error while fetching data:", err);
//     }
// };

// const renderData = () => {
//     const bodyData = document.getElementById("bodyData");

//     if (bodyData) {
//         const body = dataContact
//             .map(
//                 (contact) =>
//                     `
//                 <h2 class="bg-primary">${contact.nama}</h2>
//             `
//             )
//             .join("");

//         bodyData.innerHTML = body;
//     } else {
//         console.error("Body data container (bodyData) not found");
//     }
// };

// getData();

// Form Submission
const submitBtn = document.getElementById('submitBtn');

if (submitBtn) {
    submitBtn.addEventListener('click', async function () {
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const message = document.getElementById('message')?.value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        const formData = {
            name: name,
            email: email,
            message: message,
        };

        try {
            const response = await fetch('https://backend-three-tau-34.vercel.app/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Failed to send message: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Success:', data);
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending message. Please try again later.');
        }
    });
} else {
    console.error("Submit button (submitBtn) not found");
}
