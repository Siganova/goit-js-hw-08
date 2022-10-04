import throttle from 'lodash.throttle';

const KEY = "feedback-form-state";
const refs = {
    formFeedback: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
};
let formData = {};

populateForm();

refs.formFeedback.addEventListener('input', throttle((event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
}, 500));

refs.formFeedback.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!refs.email.value || !refs.message.value) {
        alert('Пожалуйста, заполните оба поля!');
        return;
    }
    console.log(formData);
    
    event.currentTarget.reset();
    localStorage.removeItem(KEY);
});

function populateForm(){
    const cacheData = JSON.parse(localStorage.getItem(KEY));

    if (cacheData) {
        formData = Object.assign({}, cacheData);
        refs.email.value = cacheData.email || '';
        refs.message.value = cacheData.message || '';
    }
}