const utterance = new SpeechSynthesisUtterance();

utterance.lang = "en";
utterance.rate = 0.8;

function speak() {
    speechSynthesis.speak(utterance);
}

function stop() {
    speechSynthesis.cancel();
}

function setText(event) {
    utterance.text = event.target.innerText;
} 