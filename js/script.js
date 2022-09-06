console.log('Warsztat - Walidacja formularza zapisu do Newslettera');

let NewsletterForm = document.getElementById(Newsletter-form);
let allAgreeChx = document.getElementById('all-agree');
const validate = (event) => {
    event.preventDefault();
    console.log('validate()');

}

NewsletterForm.addEventListener('submit', validate);
console.log(allAgreeChx);



console.log(NewsletterForm);


