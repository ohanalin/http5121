var side,
    movingRight,
    max = 0,
    owl = document.getElementById('owly');

atBounds = () => {
  if (movingRight) {
    if (owl.getBoundingClientRect().right >= max) {
      return true;
    }
  } else {
    if (owl.getBoundingClientRect().left <= max) {
      return true;
    }
  }
  return false;
}

move = () => setTimeout(() => {
  if (!atBounds()) {
    owl.style.left = String((parseInt(owl.style.left) || 0) + side) + 'px';
  }
  if (side > 0) {
    owl.style.transform = 'rotateY(180deg)';
    owl.style.transformOrigin = '50% 50%';
  } else {
    owl.style.transform = 'rotateY(0deg)';
    owl.style.transformOrigin = '0% 0%';
  }
  move();
}, 10);

document.onmousemove = e => {
  // debugger;
  movingRight = e.pageX > (window.innerWidth / 2);
  max = e.pageX;

  if (atBounds()) {
    side = 0;
    return;
  }

  side = e.pageX > (window.innerWidth / 2) ? 2 : -2;
}

move();

$(document).on('mousemove', function(e){
  $('#seed').css({
    left:  e.pageX,
    top:   e.pageY
  });
});