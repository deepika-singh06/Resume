
const messages = [
    { text: "You are my love, The most handsome boyfriend ever, ayeeeeeee mera bodybuilder, keep shining!", image: "images/pic1.jpg"},
    { text: "Believe in yourself as much as I believe in you! 💖", image: "./images/pic3.jpg" },
    { text: "No matter what, I am always here cheering for you! 🎉", image: "images/pic2.jpg" },
    { text: "Thank you for choosing me. Thank you for keeping up with me. Thank you for loving me. Thank you for understanding me.  thank you for trusting me. Thank you for trying to change youself, things accourding to me. Thank you for respecting me and my words. Just Thank you for everything you do. you're the best. Better than best I could ever find I don't know How my life would be without yoy, it's impossible for me to think...💕", image: "images/pic5.jpg" },
    { text: "I choose you and i'll choose you over and over again without a pause, without a doubt, in a heartbeat. I'll keep choosing you.", image: "images/pic12.jpg" },
    { text: "Wish I was In your arms right now.", image: "images/pic10.jpg" },
    { text: "I just wanna make you the happiest you've ever been. ", image: "images/pic7.jpg" },
    { text: "I'm gonna love ypu at your best and at your worst, Nothing gonna change that.", image: "images/pic6.jpg" },
    { text: "I just wanted to take a moment to remind you how much you mean to me more than words can say – Your happiness, your struggles, everything about you is important to me and I promise to spend my entire life making sure you get all the love you deserve.", image: "images/pic8.jpg"},
    { text: "If you are heaven, i would love to die. If you are tears, i would love to cry. If you are pain, i would love to get hurt. You think i'm gonna leave you..? but My Love your Name is my favourite word, you're my favourite.",image: "images/pic9.jpg"},
    { text: "You are the only one who i wouldn't mind losing sleep for, the only one who i can never get tired of talking to and the only one who crosses my mind constantly throughout the day.", image: "images/pic4.jpg" },
    { text: "🤝 You are never alone – I am always here, supporting you, loving you, and standing by your side.", image: "images/pic11.jpg"}
];

// Show motivational message
function showMessage() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("special-message").innerText = randomMessage.text;
}

// Arrange images in circular pattern
function showImages() {
    const imageGallery = document.getElementById("image-gallery");
    imageGallery.innerHTML = "";

    const radius = 480; // Radius of the circle
    const centerX = 500, centerY = 600; // Center position

    messages.forEach((item, index) => {
        const angle = (index / messages.length) * (2 * Math.PI); // Calculate angle
        const x = centerX + radius * Math.cos(angle) - 40;
        const y = centerY + radius * Math.sin(angle) - 40;

        const imgElement = document.createElement("img");
        imgElement.src = item.image;
        imgElement.alt = "Love Image";
        imgElement.style.left = `${x}px`;
        imgElement.style.top = `${y}px`;

        // Add click event for pop-up effect
        imgElement.addEventListener("click", () => openPopup(item.image));

        imageGallery.appendChild(imgElement);
    });
}

// Open pop-up with the selected image
function openPopup(imageSrc) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");

    popupImg.src = imageSrc;
    popup.style.display = "block";
}

// Close pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Load images on page load
document.addEventListener("DOMContentLoaded", showImages);


