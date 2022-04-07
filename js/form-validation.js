const form = document.querySelector('#form');
const smallMsg = document.querySelector('.form-msg');
smallMsg.classList.add('form-response');

const nameErrorMsg = 'Name is required!';
const emailReqMsg = 'Email is required!';
const emailInvMsg = 'Email is invalid!';
const commentsReqMsg = 'What are you trying to say?';
const commentsInvMsg = 'Your message is too long or too short!';

function validateName(name, reqmsg) {
  if (name.length > 0) {
    return [true, ''];
  }
  return [false, reqmsg];
}

function validateEmail(email, reqmsg, invmsg) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  if (email.length > 5) {
    if (emailRegex.test(email.trim()) && email.toLowerCase() === email) {
      return [true, ''];
    } else {
      return [false, invmsg];
    }
  } else {
    return [false, reqmsg];
  }
}

function validateComments(comments, reqmsg, invmsg) {
  if (comments.length > 0) {
    if (10 <= comments.length && comments.length <= 512) {
      return [true, ''];
    } else {
      return [false, invmsg];
    }
  } else {
    return [false, reqmsg];
  }
}

form.addEventListener("submit", (event) => {
	let nameValid = validateName(form.elements["full-name"].value, nameErrorMsg);
	let emailValid = validateEmail(form.elements["email"].value, emailReqMsg, emailInvMsg);
  let commentsValid = validateComments(form.elements["comments"].value, commentsReqMsg, commentsInvMsg);
	if (nameValid[0] && emailValid[0] && commentsValid[0]) {
    smallMsg.innerHTML = 'Yay, thanks for contacting me!';
    form.elements["full-name"].classList.remove('invalid-state');
    form.elements["email"].classList.remove('invalid-state');
    form.elements["comments"].classList.remove('invalid-state-comments');
    form.elements["full-name"].classList.add('valid-state');
    form.elements["email"].classList.add('valid-state');
    form.elements["comments"].classList.add('valid-state-comments');
    smallMsg.classList.add('success');
    smallMsg.classList.remove('unsuccess');
    return;
	} else {
    smallMsg.classList.remove('success');
    smallMsg.classList.add('unsuccess');
    event.preventDefault();
    if (!nameValid[0]) {
      smallMsg.innerHTML = nameValid[1];
      form.elements["full-name"].classList.remove('valid-state');
      form.elements["full-name"].classList.add('invalid-state');
    }
    if (!emailValid[0]) {
      smallMsg.innerHTML = emailValid[1];
      form.elements["email"].classList.remove('valid-state');
      form.elements["email"].classList.add('invalid-state');
    }
    if (!commentsValid[0]) {
      smallMsg.innerHTML = commentsValid[1];
      form.elements["comments"].classList.remove('valid-state-comments');
      form.elements["comments"].classList.add('invalid-state-comments');
    }
  }
});