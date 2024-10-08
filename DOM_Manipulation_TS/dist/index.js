"use strict";
// const formEle = document.querySelector('form')!;
const formEle = document.querySelector('.form-ele');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userCountry = document.querySelector('#country');
const userFeedback = document.querySelector('#feedback');
formEle.addEventListener('submit', (event) => {
    event.preventDefault();
    const userData = {
        userName: userName.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value,
        userFeedback: userFeedback.value
    };
    console.log('form is submitted successfully', userData);
});
