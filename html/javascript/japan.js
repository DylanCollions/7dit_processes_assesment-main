document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('checker').addEventListener('click', function() {
        const correctAnswer = 'japan'; 
        const userAnswer = document.getElementById('tbox').value.trim().toLowerCase();
        const resultDiv = document.getElementById('result');

        if (userAnswer === correctAnswer) {
            resultDiv.textContent = 'Correct';
            resultDiv.style.color = 'green';
            setTimeout(function() {
            window.location.href = 'india.html';
        }, 500);
        } else {
            resultDiv.textContent = 'Wrong';
            resultDiv.style.color = 'red';
        }
    });
});