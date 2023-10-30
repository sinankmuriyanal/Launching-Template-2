document.getElementById('launchButton').addEventListener('click', function () {
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
    setTimeout(function () {
        window.location.href = "https://basefoundation.in";
    }, 100);
});

function createConfetti() {
    const colors = ["#ff69b4", "#87ceeb", "#ffc0cb", "#90ee90", "#ffcc00"];
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.querySelector('.confetti-container').appendChild(confetti);
    confetti.addEventListener('animationend', () => {
        confetti.remove();
    });
}
