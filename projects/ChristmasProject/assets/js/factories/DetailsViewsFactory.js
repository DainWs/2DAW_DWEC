import { formatTextToURL, formatImageUrl } from "../utils/ViewUtils.js";

function makeSimpleDetails(value) {
    let li = document.createElement('li');
    li.innerText = value;
    return li;
}

function makeSimpleLinkedDetails(value) {
    let li = document.createElement('li');

    let link = document.createElement('a');
    link.setAttribute('href', `https://www.google.es/search?q=${formatTextToURL(value)}`)
    link.innerText = value;

    li.appendChild(link);
    return li;
}

function makeDetails(title, list, fun) {
    let details = null;
    let array = Array.from(list);
    if (array.length > 0) {
        details = makeDetailsWithSummary(title);
        let ul = document.createElement('ul');
        ul.innerHTML = "";
        array.forEach((value) => {
            ul.appendChild(fun(value))
        });
        details.appendChild(ul);
    }
    return details;
}

function makeDetailsWithSummary(summaryText) {
    let details = document.createElement('details');
    let summary = document.createElement('summary');
    summary.innerText = summaryText;
    details.appendChild(summary);
    return details;
}

export { makeSimpleDetails, makeSimpleLinkedDetails, makeDetails };