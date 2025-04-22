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

    // Универсальный код для социальных кнопок
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