/* =========================================
   THE MYSTERY OF THE LOST TRAIN
   JavaScript
========================================= */


/* ---------- Puzzle 1 ---------- */

function checkRiddle() {

    const input = document
        .getElementById("riddleAnswer");

    const message = document
        .getElementById("riddleMessage");

    const trail = document
        .getElementById("trailPuzzle");

    if (!input || !message) return;

    const answer = input.value
        .trim()
        .toLowerCase();

    if (
        answer === "train" ||
        answer === "a train"
    ) {

        message.textContent =
            "Correct! The next clue has been unlocked.";

        message.className =
            "message success";

        if (trail) {
            trail.classList.remove("hidden");
        }

        playSound("successSound");

    } else {

        message.textContent =
            "Not quite. Read the riddle again.";

        playSound("wrongSound");
    }
}


/* ---------- Move clue up ---------- */

function moveUp(button) {

    const card = button.parentElement;
    const previous = card.previousElementSibling;

    if (previous) {
        card.parentElement.insertBefore(card, previous);
    }
}


/* ---------- Move clue down ---------- */

function moveDown(button) {

    const card = button.parentElement;
    const next = card.nextElementSibling;

    if (next) {
        card.parentElement.insertBefore(next, card);
    }
}


/* ---------- Puzzle 2 ---------- */

function checkOrder() {

    const cards = document
        .querySelectorAll("#clueList .clue-card");

    const correctOrder = [
        "journal",
        "map",
        "tunnel",
        "key"
    ];

    const currentOrder =
        Array.from(cards).map(card => {

            const image =
                card.querySelector("img");

            return image
                ? image.src.split("/").pop()
                : "";

        });

    const expected = [
        "journal-symbol.png",
        "map-symbol.png",
        "tunnel-symbol.png",
        "key-symbol.png"
    ];

    const correct =
        currentOrder.every(
            (item, index) =>
                item === expected[index]
        );

    const message =
        document.getElementById("orderMessage");

    const success =
        document.getElementById("successPanel");

    if (!message) return;

    if (correct) {

        message.textContent =
            "Correct! You discovered the trail.";

        message.className =
            "message success";

        if (success) {
            success.classList.remove("hidden");
        }

        playSound("successSound");

    } else {

        message.textContent =
            "The trail is not correct yet. Keep investigating.";

        playSound("wrongSound");
    }
}


/* ---------- Sound Effects ---------- */

function playSound(id) {

    const sound =
        document.getElementById(id);

    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }
}