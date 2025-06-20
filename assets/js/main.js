/*
Author       : AB_Themes
Template Name: Edumate
Version      : 1.0
*/

const menuItem = document.getElementById('menu-item');

  // ABOUT AREA
  document.querySelector('.aboutBtn').addEventListener('click', () => {
    menuItem.classList.add('hide');
    document.getElementById('aboutPanel').classList.add('active');
  });
  document.getElementById('backBtnAbout').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('aboutPanel').classList.remove('active');
    menuItem.classList.remove('hide');
  });

  // SERVICES AREA
  document.querySelector('.serviceBtn').addEventListener('click', () => {
    menuItem.classList.add('hide');
    document.getElementById('servicePanel').classList.add('active');
  });
  document.getElementById('backBtnService').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('servicePanel').classList.remove('active');
    menuItem.classList.remove('hide');
  });


  // CAREER AREA
  document.querySelector('.careerBtn').addEventListener('click', () => {
    menuItem.classList.add('hide');
    document.getElementById('careerPanel').classList.add('active');
  });
  document.getElementById('backBtnCareer').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('careerPanel').classList.remove('active');
    menuItem.classList.remove('hide');
  });

  // PORTFOLIO AREA
  document.querySelector('.folioBtn').addEventListener('click', () => {
    menuItem.classList.add('hide');
    document.getElementById('folioPanel').classList.add('active');
  });
  document.getElementById('backBtnFolio').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('folioPanel').classList.remove('active');
    menuItem.classList.remove('hide');
  });

  // CLIENTS AREA
  document.querySelector('.clientBtn').addEventListener('click', () => {
    menuItem.classList.add('hide');
    document.getElementById('clientPanel').classList.add('active');
  });
  document.getElementById('backBtnClient').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('clientPanel').classList.remove('active');
    menuItem.classList.remove('hide');
  });

  // CONTACT AREA
  document.querySelector('.contactBtn').addEventListener('click', () => {
    menuItem.classList.add('hide');
    document.getElementById('contactPanel').classList.add('active');
  });
  document.getElementById('backBtnContact').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('contactPanel').classList.remove('active');
    menuItem.classList.remove('hide');
  });


  
	/* Lightbox js */
	
	lightbox.option({
	  'resizeDuration': 200,
	  'wrapAround': true
	});