// My interests stored in a JavaScript array
const interests = [
    "Software Engineering",
    "Web Development",
    "JavaScript",
    "Learning new technologies"
];

// Find the interests list in the HTML
const interestsList = document.getElementById("interestsList");

// Add each interest to the webpage
interests.forEach(function(interest) {
    const listItem = document.createElement("li");

    listItem.textContent = interest;

    interestsList.appendChild(listItem);
});

// Find the button and additional information
const moreButton = document.getElementById("moreButton");
const moreInfo = document.getElementById("moreInfo");

// Make the button interactive
moreButton.addEventListener("click", function() {

    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        moreButton.textContent = "Show less";
    } else {
        moreInfo.style.display = "none";
        moreButton.textContent = "Show more about me";
    }

});