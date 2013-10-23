Emoji = {};

Emoji.convert = function (str) {
    if (typeof str !== "string") {
        return "";
    }

    return str.replace(/:[\+\-a-zA-Z0-9_]+:/g, function(match) {
        var imgName = match.slice(1, -1);
        var path = '/packages/emoji/img/' + imgName + '.png';
        return "<img class='emoji' src='" + path + "'/>";
    });
}