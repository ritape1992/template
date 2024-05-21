const toggleButton = document.getElementById('avocado_button');
const myDiv = document.getElementById('avocado');

toggleButton.addEventListener('click', () => {
  if (myDiv.style.display === 'none') {
    myDiv.style.display = 'block';
    toggleButton.textContent = 'סגור';
  } else {
    myDiv.style.display = 'none';
    toggleButton.textContent = 'קרא עוד...';
  }
});