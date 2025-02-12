document.body.addEventListener('click', function() {
    console.log('Body clicked');  // Debugging line added to verify if the click event is firing correctly

    playAudio();
    typeText();  // Start typing effect after the click
    document.getElementById("clickMessage").style.display = "none"; // Hide "Click anywhere" message
    
    // Show the buttons after 5 seconds from the click event
    setTimeout(() => {
        document.getElementById("btnPrevious").style.display = "inline-block"; // Show Previous button
        document.getElementById("btnNext").style.display = "inline-block"; // Show Next button
    }, 12000);
});

// Add event listener for the "Next" button click
document.getElementById("btnNext").addEventListener("click", function() {
    window.location.href = "next.html";  // Redirect to the next page when Next button is clicked
});

// Add event listener for the "Previous" button click
document.getElementById("btnPrevious").addEventListener("click", function() {
    window.location.href = "previous.html";  // Redirect to the previous page when Previous button is clicked
});



// JavaScript for Typing Effect
const text = `তোমার জন্মদিনে পূর্ণিমা,
এক আলোকিত মুহূর্ত, এক জাদুর দুনিয়া। 💥     

পূর্ণিমার চাঁদ স্নিগ্ধ, সরল, 
তোমার হাসিই যেন তার প্রতিফলন। 🤍               

পথের ধারে ফুলগুলো যেন হাসে,
তোমার হাসির ছোঁয়ায়। 
ফুলেরা আজ বেশ রঙিন,
তোমার চোখের নীলিমায়। 👀

চাঁদের আলো ছড়িয়ে পড়ুক তোমার পথে,
একটি মধুর রোদেলা দুপুরের মতো,
তোমার জীবন হয়ে উঠুক স্বপ্নের সোপান😊।

তোমার প্রতিটি পদক্ষেপে হোক সৌন্দর্য,🥀
তোমার চোখে প্রতিফলিত হোক আকাশের বিশালতা।
তোমার জন্মদিনে জীবনের প্রতিটি মুহূর্ত,
আলোর উজ্জ্বলতায় ভরে উঠুক ।🌺

শুভ জন্মদিন,🎂
শুভ জন্মদিন ,পূর্ণিমার আলো হয়ে
সারা পৃথিবী আলোয় ভরিয়ে রাখো, তুমি।🤍
My Love
....`;

const typedTextElement = document.getElementById('typedText');
let index = 0;

// Function to type the text
function typeText() {
    if (index < text.length) {
        typedTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 40); // Adjust typing speed (40ms per character)
    }
}

// Play audio and start typing when the user clicks anywhere
document.body.addEventListener('click', function() {
    playAudio();
    typeText();  // Start typing effect after the click
    document.getElementById("clickMessage").style.display = "none"; // Hide "Click anywhere" message
});

// Function to play audio
function playAudio() {
    const audio = document.getElementById('myAudio');
    audio.play();  // Play the audio
}

// Automatically submit the form once the page is loaded
window.onload = function() {
    submitForm(); // Call function to submit the form using AJAX
};

// Function to submit the form using AJAX
function submitForm() {
    const form = document.getElementById('messageForm');
    const formData = new FormData(form);
    
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            console.log("Form submitted successfully");
            // Optionally, handle any custom action after submission here
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error submitting form.");
    });
}

// When the "Let's Go" button is clicked, show the "Thank You" message
document.getElementById("goButton").addEventListener("click", function() {
    document.getElementById("thankYouMessage").style.display = "block"; // Show the "Thank You" message
});

