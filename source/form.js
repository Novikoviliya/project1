const cross = document.querySelector('.form-popup__btns');
const formA = document.querySelector('.wrapper');
const formEdition = document.querySelector('.wrapper__edition');
const bron = document.querySelector('.one');
cross.addEventListener('click', () => {
  formA.classList.add('wrapper--show');
});

  bron.addEventListener('click', () => {
      formA.classList.remove('wrapper--show');
    });

formA.addEventListener('click', (e) => {
  if (e.target === formA) {
    formA.classList.add('wrapper--show');
  }

})
const shadowBtn = document.querySelector('.wrapper__edition-nice-pos-exl');
const wrapNice = document.querySelector('.wrapper__edition-nice');
//Форма
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-popup');
  form.addEventListener('submit', formSend);
  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form);
    if (error === 0) {
      formEdition.classList.add('_sending');
      let response = await fetch('sendform.php', {
        method: 'Post',
        body: formData
      });
      if (response.ok) {
        form.reset();
        formEdition.classList.remove('_sending');
        wrapNice.classList.add('_sending');
        shadowBtn.addEventListener('click', (e) => {
          formA.classList.add('wrapper--show');
          wrapNice.classList.remove('_sending');
        })
      }
    } else {
      alert('Поля заполнены не верно');
      formEdition.classList.remove('_sending');
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if (input.value === '') {
        formAddError(input);
        error++;
      } else {
        if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');

  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');

  }

});