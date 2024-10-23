window.addEventListener("load", function () {
    document.getElementById('language-toggle').addEventListener('click', (event) => {
        
        // GET THE CURRENT LANGUAGE
        const imgSrc = event.target.src;
        const currentLang = imgSrc.includes('en') ? 'es' : 'en';
        const newLang = currentLang === 'en' ? 'es' : 'en';

        // CREATE THE NEW COOKIE
        document.cookie = `lang=${newLang}; path=/; max-age=${60 * 60 * 24 * 30}`; // 30 days

        // RELOAD THE PAGE
        location.reload();
    });
});