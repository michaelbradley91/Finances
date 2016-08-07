var testing = false;

process.argv.forEach(function (argument) {
    if (argument.indexOf('mocha-webpack') >= 0) {
        testing = true;
    }
});

module.exports = {
    testing: testing
}