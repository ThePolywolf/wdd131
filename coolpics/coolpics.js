const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');
const gallery = document.getElementById('gallery')

function toggleMenu() {
    menu.classList.toggle('hide');
}

function handleResize() {
    if (window.innerWidth > 1100) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }

}

function viewerTemplate(imgPath, altText) {
    return `<div id="viewer">
        <button class="close-viewer">X</button>
        <img src="${imgPath}" alt="${altText}">
    </div>`;
}

function removeViewer(event) {
    const viewer = event.target.closest('div');
    viewer.remove();
}

function viewHandler(event) {
    const clicked = event.target;
    const src = clicked.src.replace('-sm', '-full');
    const htmlInsert = viewerTemplate(src, 'Full Lake Image');
    const body = document.querySelector('body');
    body.insertAdjacentHTML("afterbegin", htmlInsert);
    const closeButton = document.getElementById('viewer').querySelector('button');
    closeButton.addEventListener('click', removeViewer);
}

menuButton.addEventListener('click', toggleMenu);
window.addEventListener('resize', handleResize);
gallery.addEventListener('click', viewHandler);

handleResize();