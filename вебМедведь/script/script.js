const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});



// форма 

document.getElementById('firstForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Скрываем первую форму и показываем вторую
    document.getElementById('firstForm').style.display = 'none';
    document.getElementById('secondForm').style.display = 'block';
});
document.addEventListener('DOMContentLoaded', () => {
    const firstForm = document.getElementById('firstForm');
    const secondForm = document.getElementById('secondForm');
    const confirmationMessage = document.querySelector('.confirmation-message');

    firstForm.addEventListener('submit', function(e) {
      e.preventDefault();
      firstForm.style.display = 'none';
      secondForm.style.display = 'block';
    });

    secondForm.addEventListener('submit', function(e) {
      e.preventDefault();
      confirmationMessage.style.display = 'block';
      secondForm.style.display = 'none';
    });
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
