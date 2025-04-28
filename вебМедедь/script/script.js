// слайдер

let currentIndex = 0;

function showSlides(index) {
   const slides = document.querySelectorAll('.slide');
   const dots = document.querySelectorAll('.dot');

   if (index >= slides.length) currentIndex = 0; // Если индекс больше количества слайдов
   if (index < 0) currentIndex = slides.length - 1; // Если индекс меньше нуля

   slides.forEach((slide, i) => {
       slide.style.display = (i === currentIndex) ? 'block' : 'none'; // Показываем текущий слайд
       dots[i].className = dots[i].className.replace(' active', ''); // Убираем активный класс у всех индикаторов
   });

   dots[currentIndex].className += ' active'; // Добавляем активный класс к текущему индикатору
}

function changeSlide(n) {
   showSlides(currentIndex += n);
}

function currentSlide(n) {
   showSlides(currentIndex = n);
}

// Инициализация первого слайда
showSlides(currentIndex);
// форма 

document.getElementById('firstForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Скрываем первую форму и показываем вторую
    document.getElementById('firstForm').style.display = 'none';
    document.getElementById('secondForm').style.display = 'block';
});