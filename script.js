const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');
const bookingForm = document.querySelector('#bookingForm');
const nameInput = document.querySelector('#nameInput');
const phoneInput = document.querySelector('#phoneInput');
const routeInput = document.querySelector('#routeInput');
const dateInput = document.querySelector('#dateInput');
const formMessage = document.querySelector('#formMessage');

burger.addEventListener('click', function () {
  nav.classList.toggle('open');
  document.body.classList.toggle('lock');
});

nav.addEventListener('click', function (event) {
  if (event.target.tagName === 'A') {
    nav.classList.remove('open');
    document.body.classList.remove('lock');
  }
});

bookingForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const route = routeInput.value.trim();
  const date = dateInput.value.trim();

  formMessage.classList.remove('success', 'error');

  if (name === '' || phone === '' || route === '' || date === '') {
    formMessage.textContent = 'Заполните все поля заявки';
    formMessage.classList.add('error');
    return;
  }

  const request = {
    id: Date.now(),
    name: name,
    phone: phone,
    route: route,
    date: date,
    status: 'new'
  };

  const requests = JSON.parse(localStorage.getItem('boatRequests')) || [];
  requests.push(request);
  localStorage.setItem('boatRequests', JSON.stringify(requests));

  formMessage.textContent = 'Заявка сохранена в localStorage';
  formMessage.classList.add('success');
  bookingForm.reset();
});
