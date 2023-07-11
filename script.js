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

window.addEventListener('scroll', function() {
    const pathwayImgBlock = document.querySelector('.pathway__img-block');
    const pathwayImgBlockPosition = pathwayImgBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (pathwayImgBlockPosition < windowHeight / 2) {
        pathwayImgBlock.classList.add('show');
    }
});


document.addEventListener("click", function(event) {
    const dropdownList = document.getElementsByClassName("dropdown__list");
    for (let i = 0; i < dropdownList.length; i++) {
        dropdownList[i].style.display = "none";
    }

    const targetElement = event.target;
    if (targetElement.classList.contains("dropdown__selected")) {
        const dropdown = targetElement.parentNode;
        const list = dropdown.getElementsByClassName("dropdown__list")[0];
        list.style.display = "block";
    }
});

window.addEventListener('scroll', function() {
    const imgChoose = document.querySelector('.img__choose');
    const imgChoosePosition = imgChoose.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (imgChoosePosition < windowHeight / 2) {
        imgChoose.classList.add('show');
    }
});

window.addEventListener('scroll', function() {
    const reviewBlockTonia = document.querySelector('.review__block_Tonia');
    const reviewBlockToniaPosition = reviewBlockTonia.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (reviewBlockToniaPosition < windowHeight / 2) {
        reviewBlockTonia.classList.add('show');
    }
});

window.addEventListener('scroll', function() {
    const reviewBlockGrace = document.querySelector('.review__block_Grace');
    const reviewBlockGracePosition = reviewBlockGrace.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (reviewBlockGracePosition < windowHeight / 2) {
        reviewBlockGrace.classList.add('show');
    }
});










