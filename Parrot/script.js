const button = document.getElementById('feed-button');
const food = document.querySelector('.food');

button.addEventListener('click', () => {
  food.style.opacity = 1;
  food.style.top = '60px';
  
  setTimeout(() => {
    food.style.opacity = 0;
    food.style.top = '-50px';
  }, 1000);
});
