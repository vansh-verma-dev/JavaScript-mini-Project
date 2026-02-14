document.getElementById("sumitbtn").addEventListener("click", (e) => {
  e.preventDefault();

  const heightInput = document.getElementById("height").value;
  const weightInput = document.getElementById("Weight").value;

  const result = document.getElementById("Result");
  const Status = document.getElementById("Status");

  // validation
  if (heightInput === "" || heightInput <= 0) {
    result.innerHTML = "Enter valid height";
    Status.innerHTML = "";
    return;
  }

  if (weightInput === "" || weightInput <= 0) {
    result.innerHTML = "Enter valid weight";
    Status.innerHTML = "";
    return;
  }

  // convert
  const height = parseFloat(heightInput);
  const weight = parseFloat(weightInput);

  // calculate
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  result.innerHTML = bmi;

  // status
  if (bmi < 18.5) {
    Status.innerHTML = " Underweight";
    Status.style.backgroundColor = "blue";
  } else if (bmi < 24.9) {
    Status.innerHTML = " Normal";
    Status.style.backgroundColor = "green";
  } else if (bmi < 29.9) {
    Status.innerHTML = " Overweight";
    Status.style.backgroundColor = "orange";
  } else {
    Status.innerHTML = " Obese";
    Status.style.backgroundColor = "red";
  }
});
