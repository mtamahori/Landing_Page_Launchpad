const header = document.getElementsByTagName('header')[0];

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  console.log(scrollPosition);
  if (scrollPosition > 65) {
    header.classList.add('active');
  }
  else {
    header.classList.remove('active');
  }
});

window.addEventListener('scroll', function () {
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }

  })
});

const carouselImage = document.querySelectorAll('.carousel-image');
// console.log(carouselImage instanceof NodeList);

let counter = 1;

setInterval(function () {
  for (let i = 0; i < 4; i++) {
    carouselImage[i].classList.add('hidden');
  }

  carouselImage[counter].classList.remove('hidden');

  counter++;

  if (counter === 4) {
    counter = 0;
  }

}, 5000);




