window.addEventListener("load", function () {
    const body = document.querySelector("body");
    const menu = document.querySelector("#menu");
    const openMenuButton = document.querySelector("#open-menu");
    const closeMenuButton = document.querySelector("#close-menu");

    // FUNCTION TO OPEN MENU
    function openMenu() {

        body.classList.add('overflow-hidden'); // DISABLE SCROLLING
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
        body.classList.remove('overflow-hidden'); // ENABLE SCROLLING
    }

    // CLICK ON MENU BUTTON
    openMenuButton.addEventListener("click", openMenu);

    // CLICK ON CLOSE BUTTON
    closeMenuButton.addEventListener("click", closeMenu);
});