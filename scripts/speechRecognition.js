// Get recognition kits
recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = "nl-BE"
recognition.continuous = true
// Bool if recognition is active
let listeningToUser = false

// Runs when window is loaded
window.onload = function () {
    // Get elements needed
    const micButton = document.getElementById("mic-button")
    const outputParagraph = document.getElementById("output-paragraph")
    const statusLabel = document.getElementById("status-label")

    // Add event listener to mic button to start and stop recognition
    micButton.addEventListener('click', () => {
        if (!listeningToUser) {
            listeningToUser = true;
            recognition.start();
        } else {
            recognition.stop();
            listeningToUser = false;
        }
    })

    // Edit status label to listening on click
    recognition.onstart = () => {
        statusLabel.textContent = "Aan het luisteren..."
    }

    // Change back status label to inactive on click
    recognition.onend = () => {
        statusLabel.textContent = "Inactief.."
    }

    // Add text from recognition into output paragraph
    recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        outputParagraph.textContent = outputParagraph.textContent + " " + transcript;
    }
}