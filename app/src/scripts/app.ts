import $ = require('jquery');
import greeter = require('./greeter');

$(function () {
    $('h1').click(function () {
        alert(greeter('Michael'));
    });
});