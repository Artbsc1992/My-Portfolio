const form = document.querySelector('#form');
const smallMsg = document.querySelector('.form-msg');
smallMsg.classList.add('form-response');

const nameErrorMsg = 'Name is required!';
const emailReqMsg = 'Email is required!';
const emailInvMsg = 'Email is invalid! please use lowercase and format xxx@xxx.xx';
const commentsReqMsg = 'What are you trying to say?';
const commentsInvMsg = 'Your message is too long or too short!';

function validateName(name, reqmsg) {
  if (name.length > 0) {
    return [true, ''];
  }
  return [false, reqmsg];
}

function validateEmail(email, reqmsg, invmsg) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  if (email.length > 5) {
    if (emailRegex.test(email.trim()) && email.toLowerCase() === email) {
      return [true, ''];
    }
    return [false, invmsg];
  }
  return [false, reqmsg];
}

function validateComments(comments, reqmsg, invmsg) {
  if (comments.length > 0) {
    if (comments.length >= 10 && comments.length <= 512) {
      return [true, ''];
    }
    return [false, invmsg];
  }
  return [false, reqmsg];
}

form.addEventListener('submit', (event) => {
  const nameValid = validateName(form.elements['full-name'].value, nameErrorMsg);
  const emailValid = validateEmail(form.elements.email.value, emailReqMsg, emailInvMsg);
  const commentsValid = validateComments(form.elements.msg.value, commentsReqMsg, commentsInvMsg);
  if (nameValid[0] && emailValid[0] && commentsValid[0]) {
    smallMsg.innerHTML = 'Yay, thanks for contacting me!';

    form.elements['full-name'].classList.remove('invalid-state');
    form.elements.email.classList.remove('invalid-state');
    form.elements.msg.classList.remove('invalid-state-comments');
    smallMsg.classList.remove('unsuccess');

    form.elements['full-name'].classList.add('valid-state');
    form.elements.email.classList.add('valid-state');
    form.elements.msg.classList.add('valid-state-comments');
    smallMsg.classList.add('success');
  } else {
    smallMsg.classList.remove('success');
    smallMsg.classList.add('unsuccess');
    event.preventDefault();
    const [isNameValid, isEmailValid, isCommentsValid] = [
      nameValid[1], emailValid[1], commentsValid[1],
    ];
    if (!nameValid[0]) {
      smallMsg.innerHTML = isNameValid;
      form.elements['full-name'].classList.remove('valid-state');
      form.elements['full-name'].classList.add('invalid-state');
    } else {
      form.elements['full-name'].classList.remove('invalid-state');
      form.elements['full-name'].classList.add('valid-state');
      smallMsg.innerHTML = '';
    }
    if (!emailValid[0]) {
      smallMsg.innerHTML = smallMsg.innerHTML === '' ? isEmailValid : smallMsg.innerHTML;
      form.elements.email.classList.remove('valid-state');
      form.elements.email.classList.add('invalid-state');
    } else {
      form.elements.email.classList.add('valid-state');
      form.elements.email.classList.remove('invalid-state');
      smallMsg.innerHTML = smallMsg.innerHTML === '' ? isEmailValid : smallMsg.innerHTML;
    }
    if (!commentsValid[0]) {
      smallMsg.innerHTML = smallMsg.innerHTML === '' ? isCommentsValid : smallMsg.innerHTML;
      form.elements.msg.classList.remove('valid-state-comments');
      form.elements.msg.classList.add('invalid-state-comments');
    } else {
      form.elements.msg.classList.add('valid-state-comments');
      form.elements.msg.classList.remove('invalid-state-comments');
      smallMsg.innerHTML = smallMsg.innerHTML === '' ? isCommentsValid : smallMsg.innerHTML;
    }
  }
});
