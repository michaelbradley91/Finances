import * as $ from 'jquery';
import * as greeter from './greeter';
import './index';

$(function () {
    $('h1').click(function () {
        alert(greeter.greet('Michael'));
    });
});