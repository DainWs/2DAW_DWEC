function formatImageUrl(imageUrl) {
    let result = 'https://static.wikia.nocookie.net/disney/images/a.png';
    if (imageUrl != null) {
        result = imageUrl.replaceAll(/\/revision.*/g, '');
    }
    return result;
}

function formatTextToURL(text) {
    let result = '';
    if (text != null) {
        result = text.replaceAll(/\+/g, " ");
    }
    return result;
}

export { formatImageUrl, formatTextToURL };