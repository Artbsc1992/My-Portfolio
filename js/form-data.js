const formReloads = document.querySelector('#form');

const formData = {
  name: '',
  email: '',
  comments: '',
};

localStorage.setItem('form-data', JSON.stringify(formData));

function itemListens(inputType) {
  formReloads.elements[inputType].addEventListener('input', () => {
    localStorage[inputType] = formReloads.elements[inputType].value;
  });
}

function setItem(inputType) {
  if (localStorage[inputType] !== '') {
    formReloads.elements[inputType].value = localStorage[inputType];
  }
}

window.addEventListener('load', () => {
  formData=JSON.parse(localStorage.getItem('form-data'));
  itemListens('full-name');
  itemListens('email');
  itemListens('comments');
  setItem('full-name');
  setItem('email');
  setItem('comments');
});