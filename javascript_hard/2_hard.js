document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('checker').addEventListener('click', function() {
        const correctAnswer = 'brazil'; 
        const userAnswer = document.getElementById('tbox').value.trim().toLowerCase();
        const resultDiv = document.getElementById('result');

        if (userAnswer === correctAnswer) {
            resultDiv.textContent = 'Correct';
            resultDiv.style.color = 'green';
            setTimeout(function() {
                window.location.href = '3_hard.html';
            }, 500);
        } else {
            resultDiv.textContent = 'Wrong';
            resultDiv.style.color = 'red';
        }
    });
});

function hintFunction() {
    var x = document.getElementById("hintDIV");
    document.getElementById("hintDIV").textContent = "This Country flag uses White, Blue, Green, and Yellow"
    if (x.style.display == "block") {
      x.style.display == "none";
    } else {
      x.style.display = "block";
    }
  }