
// --------Signup page logic----
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

  //--create user data store in  object
  let user = {
    username: username,
    surname: surname,
    email: email,
    password: password,
  };
  //add date store in localstorage
  localStorage.setItem("user", JSON.stringify(user));

  msg.innerHTML="account create succesfull"
  msg.style.backgroundColor='green';  
});

//------signin page logic---
document.getElementById('loginBtn').addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.getElementById("email-input").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.querySelector(".msg");

  if(email === "" || password === ""){
    msg.innerHTML = "Please fill all required fields";
    msg.style.backgroundColor = "red";
     // Auto hide message
  setTimeout(() => {
    msg.innerHTML = "";
    msg.style.backgroundColor = "transparent";
  }, 3000);

    return;
  }

  let getdata = JSON.parse(localStorage.getItem("user"));

  if(!getdata){
    msg.innerHTML = "No account found. Please sign up.";
    msg.style.backgroundColor = "red";
     // Auto hide message
  setTimeout(() => {
    msg.innerHTML = "";
    msg.style.backgroundColor = "transparent";
  }, 3000);

    return;

  }

  if(email === getdata.email && password === getdata.password){
    msg.textContent = "Login successful";
    msg.style.backgroundColor = "green";


    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 2000);

  } else {
    msg.innerHTML = "Invalid email or password";
    msg.style.backgroundColor = "red";
     // Auto hide message
  setTimeout(() => {
    msg.innerHTML = "";
    msg.style.backgroundColor = "transparent";
  }, 3000);

  }

 
});