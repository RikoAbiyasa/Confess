function moveButton() {
    const btnNo = document.getElementById('btnNo');
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('show-popup');
}