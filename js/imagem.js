document.addEventListener('DOMContentLoaded', () => {
    const messageDiv = document.getElementById('message');
    const selectedRating = localStorage.getItem('selectedRating');

    if (selectedRating) {
        messageDiv.style.display = 'block';
        messageDiv.innerHTML = `You selected <span class="highlight">${selectedRating} out of 5</span>`;
        messageDiv.classList.add('message-bordered'); 
    }
});
