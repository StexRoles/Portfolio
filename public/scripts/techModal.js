window.addEventListener("load", function () {

    const iconContainers = document.querySelectorAll(".icon-container");

    function shouldActivateModal() {
        return window.innerWidth >= 1024; // Retorna true si el ancho de la ventana es mayor o igual a 1024px
    }

    // Itera sobre cada contenedor de icono
    iconContainers.forEach(container => {
        // Encuentra la ventana modal dentro del contenedor actual
        const modal = container.querySelector(".icon-modal");

        // Abre la ventana modal cuando el usuario pasa el mouse sobre el contenedor del icono
        container.addEventListener("mouseover", function() {
            if (shouldActivateModal()) {
                modal.classList.add('flex');
                modal.classList.remove('hidden');
            }
        });

        // Cierra la ventana modal cuando el usuario mueve el mouse fuera del contenedor del icono
        container.addEventListener("mouseout", function() {
            if (shouldActivateModal()) {
                modal.classList.remove('flex');
                modal.classList.add('hidden');
            }
        });
    });
});