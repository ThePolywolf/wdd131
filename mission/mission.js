const selector = document.querySelector('select');
const logo_img = document.querySelector('img');

function changeTheme() {
    let selection = selector.value;
    
    if (selection == "dark") {
        document.body.setAttribute("class", "dark");
        logo_img.setAttribute("src", "byui-logo_white.png");
    } else {
        document.body.removeAttribute("class");
        logo_img.setAttribute("src", "byui-logo_blue.webp");
    }
}

selector.addEventListener('change', changeTheme);