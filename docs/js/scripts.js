"use strict";

var tabs = document.getElementById('tab-list');
var listTabs = document.querySelectorAll('.tabs__item');
var tabContent = document.querySelectorAll('.tabs__content');
var acordion = document.getElementById('accordion');
var menu = document.getElementById('menu');
var topMenu = document.getElementById('top-menu');
var logo = document.getElementById('logo');
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
      el.classList.remove('tabs__content--active');

      if (el.id === e.target.getAttribute('data-tab-target')) {
        el.classList.add('tabs__content--active');
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