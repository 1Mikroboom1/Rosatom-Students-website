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
    loginModal.style.display = 'none';
    console.log('Modal hidden on load:', loginModal.classList.contains('hidden'));

    // Prevent auto-focus on loginBtn
    loginBtn.removeAttribute('autofocus');
    loginBtn.blur();

    // Open modal only on user-initiated click
    loginBtn.addEventListener('click', (e) => {
        if (!e.isTrusted) {
            console.log('Ignoring non-user-initiated click on login button');
            return;
        }
        e.stopPropagation();
        console.log('Login button clicked');
        loginModal.classList.remove('hidden');
        loginModal.style.display = 'flex';
        console.log('Modal opened:', !loginModal.classList.contains('hidden'));
    });

    // Log focus events for debugging
    loginBtn.addEventListener('focus', () => {
        console.log('Login button focused');
    });

    closeModal.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Close button clicked');
        loginModal.classList.add('hidden');
        loginModal.style.display = 'none';
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
            loginModal.style.display = 'none';
            console.log('Modal closed:', loginModal.classList.contains('hidden'));
        }
    });

    // Tasks Section
    const taskItems = document.querySelectorAll('.task-item');
    const taskDescriptions = document.querySelectorAll('.task-description > div');

    taskItems.forEach(item => {
        item.addEventListener('click', () => {
            const taskId = item.getAttribute('data-task');

            // Remove active class from all task items and descriptions
            taskItems.forEach(i => i.classList.remove('active'));
            taskDescriptions.forEach(desc => desc.classList.remove('active'));

            // Add active class to the clicked task item and corresponding description
            item.classList.add('active');
            const activeDesc = document.getElementById(taskId);
            if (activeDesc) {
                activeDesc.classList.add('active');
            }
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

    // Join Community Button
    const joinBtn = document.getElementById('joinBtn');
    joinBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://vk.com/@rosatomstudent-prisoedinyaisya-k-soobschestvu-studentov-rosatoma', '_blank');
    });

    // Social Buttons
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = btn.textContent.trim();
            if (platform === 'Телеграм') {
                window.open('https://t.me/rosatomstudent', '_blank');
            } else if (platform === 'Группа ВК') {
                window.open('https://vk.com/rosatomstudent', '_blank');
            }
        });
    });
});