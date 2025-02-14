document.getElementById("start-btn").addEventListener("click", function () {
    gsap.to("#welcome-screen", { opacity: 0, duration: 1, onComplete: () => {
        document.getElementById("welcome-screen").classList.add("hidden");
        document.getElementById("game-board").classList.remove("hidden");
        gsap.from("#game-board", { opacity: 0, duration: 1 });

        // 🔥 Animate card entrance
        gsap.from(".card", {
            scale: 0,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5
        });
    }});
});

let prompts = [
    "Give your partner a compliment ❤️", "Share your favorite memory together 💞",
    "Whisper something sweet 🥰", "Hold hands for a full minute 🤝",
    "Say three things you love about them 💘", "Describe your first impression of them 💓",
    "Give a surprise hug 🤗", "What’s your favorite thing they do for you? 💕",
    "Tell them one secret you've never shared 😏", "Plan a future date together 🎉",
    "Stare into each other’s eyes for 10 seconds 👀", "Share your favorite moment this year ✨",
    "Give your partner a quick shoulder massage 💆", "What song reminds you of them? 🎶",
    "Write a short love note and hand it over 💌", "Do a silly dance together 🕺💃",
    "Share your biggest dream in life 🌟", "Tell them what you admire most about them 🏆",
    "Ask them a deep question 💭", "Recreate your first hug 🤗",
    "Close your eyes and describe their scent 🌹", "Guess each other's favorite movie 🎬",
    "What’s one thing you’d love to do together? ✈️", "Reveal a childhood crush 😂",
    "Tell them how you knew they were special ❤️", "Give a 10-second forehead kiss 😘",
    "Share your favorite inside joke 🤣", "Ask them a ‘what if’ scenario 🤔",
    "Compliment their personality 💡", "Say something cute and cheesy 🧀"
];

// 🔥 Generate 30 Cards Dynamically
let deck = document.querySelector(".card-deck");
let seenCardsContainer = document.createElement("div");
seenCardsContainer.id = "seen-cards";
document.body.appendChild(seenCardsContainer);

for (let i = 0; i < 30; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">❤️</div>
            <div class="card-back">?</div>
        </div>
    `;
    card.addEventListener("click", function () {
        flipCard(card, i);
    });
    deck.appendChild(card);
}

let remainingCards = 30;
document.getElementById("turn-indicator").innerText = `Cards Left: ${remainingCards}`;

function flipCard(card, index) {
    if (!card.classList.contains("flipped")) {
        card.classList.add("flipped");
        let randomPrompt = prompts[index];

        setTimeout(() => {
            card.querySelector(".card-back").innerText = randomPrompt;
        }, 300);

        remainingCards--;
        document.getElementById("turn-indicator").innerText = `Cards Left: ${remainingCards}`;

        // 🔥 Move Seen Cards to Left
        setTimeout(() => {
            let seenCard = document.createElement("div");
            seenCard.classList.add("seen-card");
            seenCard.innerText = `Card ${index + 1}`;
            seenCardsContainer.appendChild(seenCard);

            gsap.to(seenCard, { x: -10, opacity: 1, duration: 0.5 });
        }, 500);
    }
}
