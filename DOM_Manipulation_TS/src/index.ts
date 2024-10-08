// const formEle = document.querySelector('form')!;
const formEle = document.querySelector('.form-ele') as HTMLFormElement;

const userName = document.querySelector('#name') as HTMLInputElement;

const userEmail = document.querySelector('#email') as HTMLInputElement;

const userCountry = document.querySelector('#country') as HTMLSelectElement;

const userFeedback = document.querySelector('#feedback') as HTMLTextAreaElement;

formEle.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const userData = {
        userName: userName.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value,
        userFeedback: userFeedback.value
    };
    console.log('form is submitted successfully', userData);

});

