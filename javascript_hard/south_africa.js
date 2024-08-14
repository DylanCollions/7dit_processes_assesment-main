document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('checker').addEventListener('click', function() {
        const correctAnswer = 'south afica'; 
        const userAnswer = document.getElementById('tbox').value.trim().toLowerCase();
        const resultDiv = document.getElementById('result');

        if (userAnswer === correctAnswer) {
            resultDiv.textContent = 'Correct';
            resultDiv.style.color = 'green';
            setTimeout(function() {
            window.location.href = 'ukraine_hard.html';
        }, 500);
        } else {
            resultDiv.textContent = 'Wrong';
            resultDiv.style.color = 'red';
        }
    });
});