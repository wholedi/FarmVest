const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('cross');
    menuList.classList.toggle('active');
});

const images = document.querySelectorAll('.svg');

document.addEventListener('mousemove', moveImages);

function moveImages(e) {
    const mouseX = e.clientX; // Получаем текущую позицию курсора по оси X
    const mouseY = e.clientY; // Получаем текущую позицию курсора по оси Y

    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        const imageX = rect.left + rect.width / 2; // Получаем центр изображения по оси X
        const imageY = rect.top + rect.height / 2; // Получаем центр изображения по оси Y

        const deltaX = (mouseX - imageX) * 0.03;
        const deltaY = (mouseY - imageY) * 0.03;

        // Обновляем позицию изображения с учетом параллакс-эффекта
        image.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
}

// window.addEventListener('mouseout', resetImages);
//
// function resetImages() {
//     images.forEach(image => {
//         image.style.transform = 'translate(0, 0)'; // Возвращаем изображения на их изначальные позиции
//     });
// }





