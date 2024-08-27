// The code below is responsable for telling the program what the user needs to enter for the answer to be correct
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("checker").addEventListener("click", function () {
    const correctAnswer = "ukraine";
    const userAnswer = document
      .getElementById("tbox")
      .value.trim()
      .toLowerCase();
    const resultDiv = document.getElementById("result");
// This part of the code is responsable for checking if the answer is correct by looking at the answer of above and then displaying 
// Correct in the Green and Wrong in Red depending on which answer the user enters.
// If the users answer is correct then it will send the user to the next quesiton which in this case is 10_hard.html
    if (userAnswer === correctAnswer) {
      resultDiv.textContent = "Correct";
      resultDiv.style.color = "green";
      setTimeout(function () {
        window.location.href = "10_hard.html";
      }, 500);
    } else {
      resultDiv.textContent = "Wrong";
      resultDiv.style.color = "red";
    }
  });
});
// The code below purpose is to keep the hint hidden from the user unless the function is called in which case it will then display the hint
function hintFunction() {
  var x = document.getElementById("hintDIV");
  document.getElementById("hintDIV").textContent = "Borders Poland";
  if (x.style.display == "block") {
    x.style.display == "none";
  } else {
    x.style.display = "block";
  }
}
