const hamburger = document.querySelector('.hamburguer');
const navMenu = document.querySelector('nav');
const navItems = document.querySelectorAll('.item-nav2');
const previewContainer = document.querySelector('.preview-container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});

const cardsArr = [
  {
    name: 'card1',
    image: 'Img/P_img/app_screen_shoot_popup.png',
    title: 'Todo list',
    text: 'This app is a powerful tool! Here you can add any task you need to complete, and you can update and delete any task as you need!',
    buttons: {
      langs: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
      other: [['See Live', 'https://artbsc1992.github.io/todo-list/dist/', 'Img/see-project-icon.svg'], ['See Source', 'https://github.com/Artbsc1992/todo-list', 'Img/source-icon.svg']],
    },
  },
  {
    name: 'card2',
    image: 'desktop-img/Project1.jpg',
    title: 'Professional Art Printing Data',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    buttons: {
      langs: ['HTML', 'Bootstrap', 'Ruby on Rails'],
      other: [['See Live', 'https://artbsc1992.github.io/My-Portfolio/', 'Img/see-project-icon.svg'], ['See Source', 'https://github.com/Artbsc1992/My-Portfolio', 'Img/source-icon.svg']],
    },
  },
  {
    name: 'card3',
    image: 'desktop-img/project2.jpg',
    title: 'Object-Oriented Programming',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    buttons: {
      langs: ['CSS', 'Bootstrap', 'Ruby on Rails'],
      other: [['See Live', 'https://artbsc1992.github.io/My-Portfolio/', 'Img/see-project-icon.svg'], ['See Source', 'https://github.com/Artbsc1992/My-Portfolio', 'Img/source-icon.svg']],
    },
  },
  {
    name: 'card4',
    image: 'desktop-img/project3.jpg',
    title: 'Obsess No More With Your HTML',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    buttons: {
      langs: ['python', 'Bootstrap', 'Ruby on Rails'],
      other: [['See Live', 'https://artbsc1992.github.io/My-Portfolio/', 'Img/see-project-icon.svg'], ['See Source', 'https://github.com/Artbsc1992/My-Portfolio', 'Img/source-icon.svg']],
    },
  },
  {
    name: 'card5',
    image: 'desktop-img/Project1.jpg',
    title: 'Ruby Just Got Crazy',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    buttons: {
      langs: ['HTML', 'Bootstrap', 'Ruby on Rails'],
      other: [['See Live', 'https://artbsc1992.github.io/My-Portfolio/', 'Img/see-project-icon.svg'], ['See Source', 'https://github.com/Artbsc1992/My-Portfolio', 'Img/source-icon.svg']],
    },
  },
  {
    name: 'card6',
    image: 'desktop-img/project2.jpg',
    title: 'Functional Programming? YES',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    buttons: {
      langs: ['HTML', 'Bootstrap', 'Ruby on Rails'],
      other: [['See Live', 'https://artbsc1992.github.io/My-Portfolio/', 'Img/see-project-icon.svg'], ['See Source', 'https://github.com/Artbsc1992/My-Portfolio', 'Img/source-icon.svg']],
    },
  },
  {
    name: 'card7',
    image: 'desktop-img/project3.jpg',
    title: 'The Rabbit-Hole To End All Rabbit-Holes Just Got Deep!',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    buttons: {
      langs: ['HTML', 'Bootstrap', 'Ruby on Rails'],
      other: [['See Live', 'https://artbsc1992.github.io/My-Portfolio/', 'Img/see-project-icon.svg'], ['See Source', 'https://github.com/Artbsc1992/My-Portfolio', 'Img/source-icon.svg']],
    },
  },
];

const template = (obj) => {
  const div = document.createElement('div');
  div.classList.add('preview');

  const divTop = document.createElement('div');
  divTop.classList.add('preview-divtop');
  const h3 = document.createElement('h3');
  h3.appendChild(document.createTextNode(obj.title));
  h3.classList.add('preview-title');
  const divIcon = document.createElement('div');

  const i = document.createElement('i');
  i.style.height = '12px';
  i.classList.add('cross-menu2');
  i.addEventListener('click', () => {
    previewContainer.classList.toggle('active');
  });
  divIcon.appendChild(i);
  divTop.appendChild(h3);
  divTop.appendChild(i);

  const div1 = document.createElement('div');
  obj.buttons.langs.forEach((btn) => {
    const button = document.createElement('button');
    button.appendChild(document.createTextNode(btn));
    div1.appendChild(button);
  });
  div1.classList.add('preview-langs');

  const img = document.createElement('img');
  img.src = obj.image;
  img.alt = 'Showcase image.';
  img.classList.add('preview-img');

  const p = document.createElement('p');
  p.appendChild(document.createTextNode(obj.text));
  p.classList.add('preview-text');

  const div2 = document.createElement('div');
  obj.buttons.other.forEach((btn) => {
    const button = document.createElement('button');
    const [a, b, c] = btn;
    const img = document.createElement('img');
    button.appendChild(document.createTextNode(a));
    button.setAttribute('onclick', `window.location.href="${b}"`);
    img.setAttribute('src', c);
    button.appendChild(img);
    button.setAttribute('id', 'button1');
    button.classList.add('open-project');
    div2.appendChild(button);
  });

  div2.classList.add('preview-buttons');
  div.appendChild(divTop);
  div.appendChild(div1);
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(div2);
  return div;
};

document.querySelectorAll('.grid-item-generic').forEach((card) => {
  const openProject = card.querySelector('.open-project');
  openProject.addEventListener('click', () => {
    let selectedCard;
    const name = card.getAttribute('data-name');
    cardsArr.forEach((card) => {
      if (card.name === name) {
        selectedCard = card;
      }
    });
    const templateFilled = template(selectedCard);
    previewContainer.innerHTML = '';
    previewContainer.appendChild(templateFilled);
    previewContainer.classList.toggle('active');
  });
});