window.addEventListener("load", function () {
    const body = document.querySelector("body");
    const menu = document.querySelector("#menu");
    const openMenuButton = document.querySelector("#open-menu");
    const closeMenuButton = document.querySelector("#close-menu");

    // FUNCTION TO OPEN MENU
    function openMenu() {

        body.style.touchAction = 'none'; // DISABLE TOUCH
        menu.classList.remove('hidden'); // SHOW MENU

        setTimeout(() => {
            menu.classList.remove('translate-x-full'); 
        }, 10); 
    }

    // FUNTION TO CLOSE MENU
    function closeMenu() {
        menu.classList.add('translate-x-full'); 
        menu.addEventListener('transitionend', () => {
            menu.classList.add('hidden'); 
        }, { once: true });
        body.style.touchAction = ''; // ENABLE TOUCH
    }

    // CLICK ON MENU BUTTON
    openMenuButton.addEventListener("click", openMenu);

    // CLICK ON CLOSE BUTTON
    closeMenuButton.addEventListener("click", closeMenu);
});