document.getElementById('birthdayCard').addEventListener('click', function() {
    this.classList.toggle('closed');
    this.classList.toggle('open');
    
    playAudio(); // কার্ড ক্লিক করলে অডিও চালু হবে
        // Show the "Click the button.." text after 5 seconds
    setTimeout(() => {
        document.getElementById('clickText').style.display = 'block'; // Make the text visible after 5 seconds
    }, 11550); // 5000 milliseconds = 5 seconds

    setTimeout(() => {
        document.getElementById("movingButton").style.display = "block"; // বাটন দৃশ্যমান করা
    }, 11000); // ৫০০০ মিলিসেকেন্ড = ৫ সেকেন্ড
});



document.addEventListener("DOMContentLoaded", function () {
    const text = `Today is full moon
& congrats you are 18 now!
A full moon on your birthday💫,
it's a magical moment! 
Happy Birthday..!🤍🥀`;

    const typedTextElement = document.getElementById('typedText');

    if (typedTextElement) { // Check if element exists
        let index = 0;
        


        function typeText() {
            if (index < text.length) {
                typedTextElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 40); // Typing speed (40ms per character)
                
            }
        }

        // Add delay before typing starts
        setTimeout(typeText, 5000); // 4000ms = 4 seconds delay
    }
});



function playAudio() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) { // যদি অডিও বন্ধ থাকে, তাহলে চালু করো
        audio.play();
    }
}

const button = document.getElementById("movingButton");
let clickCount = 0;

// বাটনের টেক্সট পরিবর্তনের জন্য একটি অ্যারে
const buttonTexts = ["Haha,Click again!", "Let's Go"];

// ১০ সেকেন্ড পর বাটনটি দেখানোর জন্য টাইমআউট ব্যবহার করা হচ্ছে
button.addEventListener("click", () => {
    clickCount++; // Increase click count

    console.log(`Button clicked ${clickCount} times`);

    // Randomly position the button
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = "absolute"; 
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    // Change button text
    if (clickCount <= buttonTexts.length) {
        button.innerText = buttonTexts[clickCount - 1];
    }

    // Hide button and redirect when click count reaches 3
    if (clickCount === 3) {
        button.style.visibility = "hidden"; // Make the button invisible
        console.log("Redirecting to Video.html");
        window.location.href = "Video.html"; // Redirect to the next page
    }
});

// Automatically submit the form once the page is loaded
        window.onload = function() {
            submitForm(); // Call function to submit the form using AJAX
        };

        // When the "Let's Go" button is clicked, show the "Thank You" message
        document.getElementById("goButton").addEventListener("click", function() {
            document.getElementById("thankYouMessage").style.display = "block"; // Show the "Thank You" message
        });

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
                } else {
                    alert("Something went wrong, please try again!");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Error submitting form.");
            });
        }
        
