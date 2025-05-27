document.addEventListener('DOMContentLoaded', function() {
    // Универсальный код для меню
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
        });
        
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && e.target !== menuBtn) {
                menu.style.display = 'none';
            }
        });
    }

    // Универсальный код для модального окна
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    
    if (loginBtn && loginModal && closeModal) {
        loginBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            loginModal.style.display = 'flex';
        });
        
        closeModal.addEventListener('click', function(e) {
            e.stopPropagation();
            loginModal.style.display = 'none';
        });
        
        loginModal.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }

    // Универсальный код для кнопок под соц-сети
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.textContent.trim();
            if (platform === 'Телеграм') {
                window.open('https://t.me/rosatomstudent', '_blank');
            } else if (platform === 'Группа ВК') {
                window.open('https://vk.com/rosatomstudent', '_blank');
            }
        });
    });

    // Tasks functionality
    const taskItems = document.querySelectorAll('.task-item');
    
    taskItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            taskItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Hide all descriptions
            document.querySelectorAll('.task-desc').forEach(desc => {
                desc.classList.remove('active');
            });
            
            // Show corresponding description
            const taskId = this.getAttribute('data-task');
            document.getElementById(`task-${taskId}`).classList.add('active');
        });
    });
    
    // Event Cards
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        card.addEventListener('click', function() {
            // If this card is already active, do nothing
            if (this.classList.contains('active')) return;
            
            // Remove active class from all cards
            eventCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Scroll to center the active card
            this.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });
    
    // Close card when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.event-card')) {
            eventCards.forEach(card => card.classList.remove('active'));
        }
    });

    // Join community button
    const joinBtn = document.getElementById('joinBtn');
    if (joinBtn) {
        joinBtn.addEventListener('click', function() {
            window.open('https://example.com/join', '_blank');
        });
    }
});

// Слайдшоу для community-map
document.addEventListener('DOMContentLoaded', function() {
    const slidesData = [
        { src: 'assets/community-map/universities/БИТИ НИЯУ МИФИ.jpg', alt: 'БИТИ НИЯУ МИФИ' },
        { src: 'assets/community-map/universities/ВГУ.jpg', alt: 'ВГУ' },
        { src: 'assets/community-map/universities/ДИТИ НИЯУ МИФИ.jpg', alt: 'ДИТИ НИЯУ МИФИ' },
        { src: 'assets/community-map/universities/ИАТЭ НИЯУ МИФИ.jpg', alt: 'ИАТЭ НИЯУ МИФИ' },
        { src: 'assets/community-map/universities/ИГЭУ им. Ленина.jpg', alt: 'ИГЭУ им. Ленина' },
        { src: 'assets/community-map/universities/КГЭУ.jpg', alt: 'КГЭУ' },
        { src: 'assets/community-map/universities/МГТУ им. Н.Э. Баумана.jpg', alt: 'МГТУ им. Н.Э. Баумана' },
        { src: 'assets/community-map/universities/МИСиС.jpg', alt: 'МИСиС' },
        { src: 'assets/community-map/universities/НВПИ НИЯУ МИФИ.jpg', alt: 'НВПИ НИЯУ МИФИ' },
        { src: 'assets/community-map/universities/НГТУ им. Р.Е. Алексеева.jpg', alt: 'НГТУ им. Р.Е. Алексеева' },
        { src: 'assets/community-map/universities/НИ ТПУ.jpg', alt: 'НИ ТПУ' },
        { src: 'assets/community-map/universities/НИУ МЭИ.jpg', alt: 'НИУ МЭИ' },
        { src: 'assets/community-map/universities/НТИ НИЯУ МИФИ.jpg', alt: 'НТИ НИЯУ МИФИ' },
        { src: 'assets/community-map/universities/ОТИ НИЯУ МИФИ.jpg', alt: 'ОТИ НИЯУ МИФИ' },
        { src: 'assets/community-map/universities/РХТУ  им. Д.И. Менделеева.jpg', alt: 'РХТУ  им. Д.И. Менделеева' },
        { src: 'assets/community-map/universities/Сеченовский Университет.jpg', alt: 'Сеченовский Университет' },
        { src: 'assets/community-map/universities/СПбГТИ (ТУ).jpg', alt: 'СПбГТИ (ТУ)' },
        { src: 'assets/community-map/universities/СПбГУ.jpg', alt: 'СПбГУ' },
        { src: 'assets/community-map/universities/СПбПУ им. Петра Великого.jpg', alt: 'СПбПУ им. Петра Великого' },
        { src: 'assets/community-map/universities/СТИ НИЯУ МИФИ.jpg', alt: 'СТИ НИЯУ МИФИ' },
        { src: 'assets/community-map/universities/ТТИ НИЯУ МИФИ.jpg', alt: 'ТТИ НИЯУ МИФИ' },
        { src: 'assets/community-map/universities/УрТК НИЯУ МИФИ.jpg', alt: 'УрТК НИЯУ МИФИ' },
        { src: 'assets/community-map/universities/УрФУ им. Б.Н. Ельцина.jpg', alt: 'УрФУ им. Б.Н. Ельцина' }
    ];

    const slidesWrapper = document.querySelector('.slides-wrapper');
    let currentIndex = 0;
    const slideDuration = 3000; // 3 секунды

    // Инициализация слайдов
    function initSlides() {
        slidesData.forEach(slide => {
            const slideElement = document.createElement('img');
            slideElement.src = slide.src;
            slideElement.alt = slide.alt;
            slideElement.className = 'slide';
            slidesWrapper.appendChild(slideElement);
        });
        
        // Клонируем первый и последний слайды для бесконечного эффекта
        const firstClone = slidesWrapper.children[0].cloneNode(true);
        const lastClone = slidesWrapper.children[slidesData.length - 1].cloneNode(true);
        
        firstClone.id = 'first-clone';
        lastClone.id = 'last-clone';
        
        slidesWrapper.prepend(lastClone);
        slidesWrapper.appendChild(firstClone);
        
        // Устанавливаем начальную позицию
        slidesWrapper.style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;
    }

    // Переход к следующему слайду
    function nextSlide() {
        currentIndex++;
        slidesWrapper.style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;
        
        // Если достигли конца, плавно переходим к началу
        if (currentIndex >= slidesData.length) {
            setTimeout(() => {
                slidesWrapper.style.transition = 'none';
                currentIndex = 0;
                slidesWrapper.style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;
                setTimeout(() => {
                    slidesWrapper.style.transition = 'transform 0.5s ease-in-out';
                }, 10);
            }, 500);
        }
    }

    // Обработка перехода между клонированными слайдами
    slidesWrapper.addEventListener('transitionend', () => {
        const slides = document.querySelectorAll('.slide');
        if (slides[currentIndex + 1].id === 'first-clone') {
            slidesWrapper.style.transition = 'none';
            currentIndex = 0;
            slidesWrapper.style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;
            setTimeout(() => {
                slidesWrapper.style.transition = 'transform 0.5s ease-in-out';
            }, 10);
        }
    });

    // Инициализация и запуск
    initSlides();
    setInterval(nextSlide, slideDuration);
});

function meme() {
    const audio = new Audio('assets/about/What Is Love but its only Vladislav.mp3');
    audio.play()
        .then(() => console.log("Воспроизведение начато"))
        .catch(error => console.error("Ошибка:", error));
}

function ProfilePath() {
    window.location.href = 'profile.html';
}