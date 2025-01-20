document.querySelectorAll('.characters__content__buttons').forEach(button => {
    button.addEventListener('click', () => {
        const character = button.getAttribute('data-character');
        const modal = document.getElementById(`modal-${character}`);
        modal.style.display = 'flex';
    });
});

document.querySelectorAll('.modal__close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        modal.style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});
