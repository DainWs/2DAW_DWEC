class CookieFactory {
    get(cookieName, defaultValue = '') {
        let pattern = new RegExp(`${cookieName}\s*=([^,$]+)`);
        let matches = document.cookie.match(pattern);
        let result = defaultValue;
        if (matches != null && matches.length > 1) {
            result = matches[1];
        }
        return result;
    }

    new(cookieName, value, maxAge = '31.536.000') {
        let customCookie = `${cookieName}=${value}`;
        if (maxAge != null) {
            customCookie += `; max-age=${maxAge}`;
        }
        document.cookie = customCookie;
    }
}

export { CookieFactory };