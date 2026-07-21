// ================================
// The Mystery of the Lost Train
// script.js
// ================================

// Inventory
let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

// Add an item to inventory
function addItem(item) {
    if (!inventory.includes(item)) {
        inventory.push(item);
        localStorage.setItem("inventory", JSON.stringify(inventory));
        alert(item + " added to your inventory!");
    } else {
        alert("You already have the " + item + ".");
    }
}

// Display inventory
function showInventory() {
    const inventoryList = document.getElementById("inventory");

    if (!inventoryList) return;

    inventoryList.innerHTML = "";

    if (inventory.length === 0) {
        inventoryList.innerHTML = "<li>No items collected yet.</li>";
        return;
    }

    inventory.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        inventoryList.appendChild(li);
    });
}

// Puzzle 1
function checkAnswer() {

    const answer = document
        .getElementById("answer")
        .value
        .trim()
        .toLowerCase();

    const result = document.getElementById("result");

    if (answer === "train") {

        result.innerHTML =
            "✅ Correct! You solved the riddle.";

        addItem("Brass Key");

    } else {

        result.innerHTML =
            "❌ Incorrect. Hint: It runs on steel rails.";

    }
}

// Beginning of Story
function beginAdventure() {

    alert("Welcome to Black Ridge!");

}

// Scene Messages
function sceneMessage(scene) {

    switch(scene){

        case 1:
            alert("Felix arrives at the abandoned station.");
            break;

        case 2:
            alert("You discover an old journal and map.");
            addItem("Journal");
            break;

        case 3:
            alert("The tunnel grows darker...");
            addItem("Map");
            break;

        case 4:
            alert("Mr. McGuffin gives you a Brass Key.");
            addItem("Brass Key");
            break;

        case 5:
            alert("The hidden train has been found!");
            break;

    }

    showInventory();

}

// Ending
function finishGame(){

    alert(
        "Congratulations!\n\nYou solved the mystery of the Lost Train!"
    );

}

// Reset Game
function restartGame(){

    localStorage.removeItem("inventory");
    inventory = [];

    alert("Game restarted!");

    location.href = "index.html";

}

// Show inventory when page loads
window.onload = function(){

    showInventory();

};