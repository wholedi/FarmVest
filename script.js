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

/*function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showImageBlock() {
    const imgBlock = document.querySelector('.works__img-block');
    if (isElementInViewport(imgBlock)) {
        imgBlock.classList.add('show');
        window.removeEventListener('scroll', showImageBlock);
    }
}

window.addEventListener('scroll', showImageBlock);*/
window.addEventListener('scroll', function() {
    const worksImgBlock = document.querySelector('.works__img-block');
    const worksImgBlockPosition = worksImgBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (worksImgBlockPosition < windowHeight / 2) {
        worksImgBlock.classList.add('show');
    }
});









