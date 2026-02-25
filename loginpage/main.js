document.querySelector(".accountBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.getElementById("name-input").value.trim();
  const surname = document.getElementById("Surname-input").value.trim();
  const email = document.getElementById("email-input").value.trim();
  const password = document.getElementById("password").value.trim();
  const checkbox = document.getElementById("checkbox").checked;
  const msg = document.querySelector(".msg");

  //condition check
  if (username === "" || surname === "" || email === "" || password === "") {
    msg.style.color = "black";
    msg.style.backgroundColor = "red";
    msg.innerHTML = "please fill all requird fields";
    return;
  }
  if (!checkbox) {
    msg.style.color = "black";
    msg.style.backgroundColor = "red";
    msg.textContent = "Please agree to Terms & Conditions";
    return;
  }

  let user = {
    username: username,
    surname: surname,
    email: email,
    password: password,
  };
  localStorage.setItem("user", JSON.stringify(user));
  msg.innerHTML="account create succesfull"
  msg.style.backgroundColor='green';

  
});
