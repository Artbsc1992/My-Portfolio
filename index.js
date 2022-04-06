const hamburger = document.querySelector('.hamburguer');
const navMenu = document.querySelector('nav');
const navItems = document.querySelectorAll('.item-nav2');
const previewContainer = document.querySelector('.preview-container');
const previewCard = document.querySelectorAll('.preview-card');

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

const buttons = {
  langs: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  other: [['See Live', ''], ['See Source', '']]
}

let cardsArr = [
  {
    name: 'card1',
    image: 'Icons/img-placeholder2.1.png',
    title: 'Professional Art Printing Data',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: {'project': '', 'source': ''}
  },
  {
    name: 'card2',
    image: 'Icons/img-placeholder2.1.png',
    title: 'Object-Oriented Programming',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: {'project': '', 'source': ''}
  },
  {
    name: 'card3',
    image: 'Icons/img-placeholder2.1.png',
    title: 'Obsess No More With Your HTML',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: {'project': '', 'source': ''}
  },
  {
    name: 'card4',
    image: 'Icons/img-placeholder2.1.png',
    title: 'Ruby Just Got Crazy',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: {'project': '', 'source': ''}
  },
  {
    name: 'card5',
    image: 'Icons/img-placeholder2.1.png',
    title: 'Functional Programming? YES',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: {'project': '', 'source': ''}
  },
  {
    name: 'card6',
    image: 'Icons/img-placeholder2.1.png',
    title: 'The Rabbit-Hole To End All Rabbit-Holes Just Got Deep!',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    link: {'project': '', 'source': ''}
  },
];

let template = (obj) => {
  let div = document.createElement('div');
  div.classList.add('preview');
  let divTop = document.createElement('div');
  divTop.classList.add('preview-divtop');
  let h3 = document.createElement('h3');
  h3.appendChild(document.createTextNode(obj.title));
  h3.classList.add('preview-title');
  let divIcon = document.createElement('div');
  // divIcon.classList.add('preview-icon');
  let i = document.createElement('i');
  i.style.height = '12px';
  i.classList.add('cross-menu2');
  divIcon.appendChild(i);
  divTop.appendChild(h3);
  divTop.appendChild(i);
  let div1 = document.createElement('div');
  for (let btn of buttons.langs) {
    let button = document.createElement('button');
    button.appendChild(document.createTextNode(btn));
    div1.appendChild(button);
  }
  div1.classList.add('preview-langs');
  let img = document.createElement('img');
  img.src = 'Img/P_img/photo1.png';
  img.alt = 'Showcase image.';
  img.classList.add('preview-img');
  let p = document.createElement('p');
  p.appendChild(document.createTextNode(obj.text));
  p.classList.add('preview-text')
  let div2 = document.createElement('div');
  for (let btn of buttons.other) {
    let button = document.createElement('button');
    button.appendChild(document.createTextNode(btn[0]));
    button.setAttribute.source = btn[1];
    button.setAttribute('id','button1');
    div2.appendChild(button);
  }
  div2.classList.add('preview-buttons')
  div.appendChild(divTop);
  div.appendChild(div1);
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(div2);
  return div;
}

let templateFilled = template(cardsArr[4]);
document.getElementById('preview-container').appendChild(templateFilled);

document.querySelectorAll('.preview-container .preview-card').forEach(card => {
  card.addEventListener('click', () => {
    previewContainer.classList.add('active');
    let name = card.getAttribute('data-name');
    previewCard.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name === target) {
        let templateFilled = template(cardsArr[1]);
        let div = document.getElementsByClassName('.preview-container');
        div.appendChild(templateFilled);
      }
    });
  });
});

previewCard.forEach(card => {
  card.querySelector('.cross-menu').addEventListener('click', () => {
    card.classList.remove('active');
    document.querySelector('.preview-container').classList.remove('active');
  });
});