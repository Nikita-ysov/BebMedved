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
// сылки 

    document.addEventListener("DOMContentLoaded", function() {
        // Получаем элементы ссылок и списков
        const links = document.querySelectorAll('.link');
        const benefitsIp = document.getElementById('benefits-ip');
        const benefitsOo = document.getElementById('benefits-oo');

        // Функция для переключения списков
        function toggleBenefits(event) {
            event.preventDefault(); // Отменяем стандартное поведение ссылки

            // Скрываем оба списка
            benefitsIp.style.display = 'none';
            benefitsOo.style.display = 'none';

            // Убираем класс active у всех ссылок
            links.forEach(link => link.classList.remove('active'));

            // Определяем, какой список показывать в зависимости от нажатой ссылки
            if (event.target.id === 'link-ip') {
                benefitsIp.style.display = 'block'; // Показываем список для ИП
                event.target.classList.add('active'); // Добавляем класс active к ссылке
            } else if (event.target.id === 'link-oo') {
                benefitsOo.style.display = 'block'; // Показываем список для ООО
                event.target.classList.add('active'); // Добавляем класс active к ссылке
            }
        }

        // Добавляем обработчики событий на ссылки
        links.forEach(link => link.addEventListener('click', toggleBenefits));

        // Устанавливаем начальное состояние (открываем список для ИП и подчеркиваем соответствующую ссылку)
        benefitsIp.style.display = 'block';
        document.getElementById('link-ip').classList.add('active');
    });
