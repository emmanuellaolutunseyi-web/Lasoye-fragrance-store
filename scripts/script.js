const button = document.querySelector('.btn');
const nameInput = document.querySelector('.text-area-name');

function alertfunc() {
  const name = nameInput.value.trim();

  if (name !== '') {
    alert(`Hi ${name}, Thank you for contacting us. We will review your request and send you an email soon`);
  } 

}

button.addEventListener('click', alertfunc);
