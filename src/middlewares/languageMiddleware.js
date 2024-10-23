const languageMiddleware = (req, res, next) => {
    const cookies = req.headers.cookie ? req.headers.cookie.split('; ') : [];
    const langCookie = cookies.find(cookie => cookie.startsWith('lang='));
    const lang = langCookie ? langCookie.split('=')[1] : 'en';
    
    res.locals.lang = lang;
    next();
}

export default languageMiddleware;