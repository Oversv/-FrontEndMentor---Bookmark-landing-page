"use strict";

var tabs = document.getElementById('tab-list');
var listTabs = document.querySelectorAll('.tabs__item');
var tabContent = document.querySelectorAll('.tab-content');
var acordion = document.getElementById('accordion');
var menu = document.getElementById('menu');
var topMenu = document.getElementById('top-menu');
var logo = document.getElementById('logo');
var form = document.getElementById('form-contact');

var validateEmail = function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(String(email.value).toLowerCase())) {
    email.classList.add('contact__email-input--error');
    email.nextSibling.classList.add('contact__email-error--show');
    email.placeholder = email.value;
    return false;
  }

  email.classList.remove('contact__email-input--error');
  email.nextSibling.classList.remove('contact__email-error--show');
  return true;
}; //TODO mirar de crear los semicirculos dinamicamente


var calcDifferenceBodyToSemicircle = function calcDifferenceBodyToSemicircle() {
  var windowSize = window.innerWidth;
  var styles = document.documentElement.style;
  var marginRight = 0.07; //%

  var marginLeft = 0.115; //%

  var semicircleRight = windowSize * marginRight;
  var semicircleLeft = windowSize * marginLeft;
  styles.setProperty('--semicircleRight', "-".concat(semicircleRight, "px"));
  styles.setProperty('--semicircleLeft', "-".concat(semicircleLeft, "px"));
};

menu.addEventListener('click', function () {
  if (topMenu.classList.contains('nav--show')) {
    logo.classList.remove('header__logo--white');
    topMenu.classList.remove('nav--show');
    menu.src = 'images/icon-hamburger.svg';
  } else {
    logo.classList.add('header__logo--white');
    topMenu.classList.add('nav--show');
    menu.src = 'images/icon-close.svg';
  }
});
tabs.addEventListener('click', function (e) {
  if (e.target.getAttribute('data-tab-target')) {
    /**List Items **/
    listTabs.forEach(function (el) {
      el.classList.remove('tabs__item--active');

      if (el === e.target) {
        el.classList.add('tabs__item--active');
      }
    });
    /**Content **/

    tabContent.forEach(function (el) {
      el.classList.remove('tab-content--active');

      if (el.id === e.target.getAttribute('data-tab-target')) {
        el.classList.add('tab-content--active');
      }
    });
  }
});
acordion.addEventListener('click', function (e) {
  if (e.target.classList.contains('accordion__question')) {
    var accordionContent = e.target.nextElementSibling;
    e.target.classList.toggle('accordion__question--active');
    accordionContent.classList.toggle('accordion__content--show');
  }
});
form.addEventListener('submit', function (e) {
  var email = form.email;
  e.preventDefault();
  validateEmail(email);
});
window.addEventListener('load', calcDifferenceBodyToSemicircle);
window.addEventListener('resize', calcDifferenceBodyToSemicircle);