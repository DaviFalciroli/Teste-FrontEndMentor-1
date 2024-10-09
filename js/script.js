document.addEventListener('DOMContentLoaded', () => {
  const ratingNumbers = document.querySelectorAll('.rating-number');
  const submitButton = document.getElementById('submit-button');

  let selectedRating = null;

  ratingNumbers.forEach(number => {
      number.addEventListener('click', () => {
          ratingNumbers.forEach(num => num.classList.remove('selected'));
          number.classList.add('selected');
          selectedRating = number.getAttribute('data-value');
          submitButton.disabled = false;
      });
  });

  submitButton.addEventListener('click', () => {
      if (selectedRating) {
          localStorage.setItem('selectedRating', selectedRating);
          window.location.href = 'imagem.html';
      }
  });
});
