window.addEventListener("load", function () {
    const iconContainers = document.querySelectorAll(".icon-container");

    // VALID IF THE MODAL IS FOR MOBILE OR TABLET
    function shouldActivateModal() {
        return window.innerWidth < 1024;
    }

    // FUNCTION TO CREATE AND SHOW MODAL
    function showModal(imageSrc, title, description) {
        // CREATE THE MODAL ELEMENT WITH THE GIVEN STRUCTURE
        const modal = document.createElement("article");
        modal.className = "fixed icon-notification z-10 top-0 p-4 w-full flex justify-center animate-slideInDown"; 
        modal.innerHTML = `
            <div class="w-[90%] bg-slate-500 rounded-xl flex items-center justify-between p-[3%] max-w-[28rem]">
                <div class="notification-image w-1/5 sm:w-1/6">
                    <img src="${imageSrc}" alt="">
                </div>

                <div class="w-3/4">
                    <p class="notification-title text-smoke-white font-bold m-0">${title}</p>
                    <p class="notification-description text-smoke-white break-words text-xs">${description}</p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // CLOSE AND REMOVE THE MODAL AFTER 3 SECONDS
        setTimeout(function() {
            modal.classList.replace('animate-slideInDown', 'animate-slideOutUp');
            setTimeout(() => modal.remove(), 1000); // Ajusta este tiempo al de tu animación de salida
        }, 3000);
    }

    // ITERATE OVER EACH ICON CONTAINER
    iconContainers.forEach(container => {
        container.addEventListener("click", function () {
            if (shouldActivateModal()) {
                // GET THE INFORMATION FROM THE ICON CONTAINER
                const imageSrc = container.querySelector(".icon-image img").src;
                const title = container.querySelector(".icon-title").innerText.trim();
                const description = container.querySelector(".icon-description").innerText.trim();

                // SHOW THE MODAL WITH THE INFORMATION
                showModal(imageSrc, title, description);
            }
        });
    });
});