// Step 1: Grab all heart icons
const articleHearts = document.querySelectorAll(".like-glyph");
console.log(articleHearts); // Should show NodeList(5)

// Step 2: Mock server function
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Step 3: Add event listeners to hearts
articleHearts.forEach(heart => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (heart.innerText === "♡") {
          heart.innerText = "♥";
          heart.classList.add("activated-heart");
        } else {
          heart.innerText = "♡";
          heart.classList.remove("activated-heart");
        }
      })
      .catch(error => {
        alert(error);
      });
  });
});
