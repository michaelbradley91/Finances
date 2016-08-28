import * as $ from 'jquery';
import * as greeter from './greeter';

$(function () {
    $('h1').click(function () {
        alert(greeter.greet('Michael'));
    });
});