console.log('Script loaded and starting execution');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    
    if (!menuBtn || !menu) {
        console.error('Menu elements not found:', { menuBtn, menu });
        return;
    }

    menuBtn.addEventListener('click', () => {
        console.log('Menu button clicked');
        menu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && e.target !== menuBtn) {
            menu.classList.add('hidden');
        }
    });

    // Login Modal
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    const modalContent = loginModal ? loginModal.querySelector('.modal-content') : null;

    // Debug logs to confirm elements are found
    console.log('loginBtn:', loginBtn);
    console.log('loginModal:', loginModal);
    console.log('closeModal:', closeModal);
    console.log('modalContent:', modalContent);

    if (!loginBtn || !loginModal || !closeModal || !modalContent) {
        console.error('Modal elements not found:', { loginBtn, loginModal, closeModal, modalContent });
        return;
    }

    // Ensure modal is hidden on load
    loginModal.classList.add('hidden');
    console.log('Modal hidden on load:', loginModal.classList.contains('hidden'));

    loginBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Login button clicked');
        loginModal.classList.remove('hidden');
        console.log('Modal opened:', !loginModal.classList.contains('hidden'));
    });

    closeModal.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Close button clicked');
        loginModal.classList.add('hidden');
        console.log('Modal closed:', loginModal.classList.contains('hidden'));
    });

    // Prevent clicks inside modal content from closing the modal
    modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close modal when clicking outside the modal content
    document.addEventListener('click', (e) => {
        if (loginModal.classList.contains('hidden')) return;
        if (!modalContent.contains(e.target) && e.target !== loginBtn) {
            console.log('Clicked outside modal');
            loginModal.classList.add('hidden');
            console.log('Modal closed:', loginModal.classList.contains('hidden'));
        }
    });

    // Tasks Section
    const taskItems = document.querySelectorAll('.tasks-list li');
    const taskDescription = document.querySelector('.task-description');

    taskItems.forEach(item => {
        item.addEventListener('click', () => {
            const taskId = item.getAttribute('data-task');
            let description = '';

            switch (taskId) {
                case 'task1':
                    description = '<h2>Что руководителя ФНО и его ФНО</h2><p>Описание задачи: Руководитель ФНО должен...</p>';
                    break;
                case 'task2':
                    description = '<h2>Что руководителя ФНО по направлению контакта с предприятиями и его ФНО</h2><p>Описание задачи: Руководитель по направлению...</p>';
                    break;
                case 'task3':
                    description = '<h2>Что руководителя по направлению работы со школьниками в ВУЗе, его ФНО</h2><p>Описание задачи: Руководитель должен организовать...</p>';
                    break;
            }

            taskDescription.innerHTML = description;
        });
    });

    // Event Cards (for events.html)
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove expanded class from all cards
            eventCards.forEach(c => c.classList.remove('expanded'));
            // Add expanded class to clicked card
            card.classList.add('expanded');
        });
    });
});