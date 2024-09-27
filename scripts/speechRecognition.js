recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = "nl-BE"
recognition.continuous = true
let started = false

window.onload = function () {
    const micButton = document.getElementById("mic-button")
    const outputParagraph = document.getElementById("output-paragraph")
    const statusLabel = document.getElementById("status-label")

    recognition.onstart = () => {
        statusLabel.textContent = "Aan het luisteren..."
    }

    recognition.onend = () => {
        statusLabel.textContent = "Inactief.."
    }

    recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        outputParagraph.textContent = outputParagraph.textContent + " " + transcript;
    }

    micButton.addEventListener('click', () => {
        if (started === false) {
            started = true;
            recognition.start();
        } else {
            recognition.stop();
            started = false;
        }
    })
}