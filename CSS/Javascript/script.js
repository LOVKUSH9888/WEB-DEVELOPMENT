const button = document.querySelector(".btn");

const outputDiv = document.querySelector("outputDiv");

button.addEventListener("click", function () {
    console.log("Button Clicked");
    outputDiv.innerHTML = "Button Clicked";
});