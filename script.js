document.querySelector(".click-btn").addEventListener("click", function (e) {
  e.preventDefault(); // prevent default button behavior

  const username = document.getElementById("name").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim().toLowerCase();

  if (username === "bujjamma" && password === "iloveyou") {
    window.location.href = "entry.html"; // open entry.html
  } else {
    alert("Wrong username or password 😢");
  }
});
