import { formatTextToURL, formatImageUrl } from "../utils/ViewUtils.js";

function makeSimpleDetails(value) {
    return $(`<li>${value}</li>`);
}

function makeSimpleLinkedDetails(value) {
    let li = $('<li></li>');
    let link =$(`<a href="https://www.google.es/search?q=${formatTextToURL(value)}">${value}</a>`);
    li.append(link);
    return li;
}

function makeDetails(title, list, fun) {
    let details = null;
    let array = Array.from(list);
    if (array.length > 0) {
        details = makeDetailsWithSummary(title);
        let ul = $('<ul></ul>');
        array.forEach((value) => {
            ul.append(fun(value))
        });
        details.append(ul);
    }
    return details;
}

function makeDetailsWithSummary(summaryText) {
    let details = $('<details></details>');
    let summary = $(`<summary>${summaryText}</summary>`);
    details.append(summary);
    return details;
}

export { makeSimpleDetails, makeSimpleLinkedDetails, makeDetails };