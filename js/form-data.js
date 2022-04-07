const formReloads = document.querySelector('#form');

let formData = {
  name: '',
  email: '',
  msg: '',
};

function formInputListens(inputType) {
  formReloads.elements[inputType].addEventListener('input', () => {
    formData[inputType] = formReloads.elements[inputType].value;
    localStorage.setItem('form-data', JSON.stringify(formData));
  });
}

function setFormInput(inputType) {
  if (localStorage[inputType] !== '') {
    formReloads.elements[inputType].value = JSON.parse(localStorage['form-data'])[inputType];
  }
}

window.addEventListener('load', () => {
  if (localStorage['form-data'] !== formData) {
    formData = JSON.parse(localStorage.getItem('form-data'));
  }

  formData = JSON.parse(localStorage.getItem('form-data'));
  formInputListens('name');
  formInputListens('email');
  formInputListens('msg');
  setFormInput('name');
  setFormInput('email');
  setFormInput('msg');
});