Template.registerHelper('pluralize', function (n, thing) {
    if (n < 2) {
        return n+ ' ' + thing;
    } else {
        return n + ' ' + thing + 's';
    }
});