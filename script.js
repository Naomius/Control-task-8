window.onload = function () {

    let form = document.getElementsByClassName('main')[0];
    let inputFullName = document.getElementById('input-full-name');
    let inputUserName = document.getElementById('input-name');
    let inputMail = document.getElementById('input-mail');
    let inputPassword = document.getElementById('input-password');
    let inputRepeatPassword = document.getElementById('input-repeat-password');
    let inputCheck = document.getElementById('input-check');

    //Пункт 2-3

    let numbers = /[0-9]/g;
    let punctuationMarks = /[,/.]/g

    inputFullName.oninput = function () {
        this.value = this.value.replace(numbers, '');
    }
    inputUserName.oninput = function () {
        this.value = this.value.replace(punctuationMarks, '');
    }

    //Пункт 4

    inputCheck.onchange = (event) => {
        if (event.currentTarget.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен')
        }
    }

    //Пункт 5
    let submitBtn = document.getElementsByClassName('btn')[0];
    submitBtn.onclick = function (event) {
        if (!inputFullName.value) {
            alert('Заполните поле Full Name')
            event.preventDefault();
            return;
        }
        if (!inputUserName.value) {
            alert('Заполните поле Name')
            event.preventDefault();
            return;
        }
        if (!inputMail.value) {
            alert('Заполните поле E-mail')
            event.preventDefault();
            return;
        }
        if (!inputPassword.value) {
            alert('Заполните поле Password')
            event.preventDefault();
            return;
        }
        if (!inputRepeatPassword.value) {
            alert('Заполните поле Repeat Password')
            event.preventDefault();
            return;
        }
        if (inputPassword.value.length < 8) {
            alert('Слишком короткий пароль');
        }

        if (inputPassword.value !== inputRepeatPassword.value) {
            alert('Разные пароли!');
            event.preventDefault();
            return;
        }
        if (inputCheck.checked !== true) {
            alert('Поставь соглашение!');
            event.preventDefault();
            return;
        }
        document.getElementsByClassName('popupSuccessMenu')[0].style.display = 'block';

    }

    let closePopup = document.getElementsByClassName('popupBtn')[0];
    closePopup.onclick = function () {
        document.getElementsByClassName('popupSuccessMenu')[0].style.display = 'none';
        document.getElementById('myForm').reset();
    }
    


//Пункт 6

    let modalWindow = document.getElementsByClassName('main-span')[0];
    let deleteFullName = document.getElementById('input-full-name');
    let modalForPopup = modalWindow.onclick = function () {
        document.getElementsByClassName('main-title')[0].innerText = 'Log in to the system';
        document.getElementById('input-full-name').remove();
        document.getElementById('input-mail').remove();
        document.getElementById('input-repeat-password').remove();
        document.getElementsByTagName('label')[0].remove();
        submitBtn.innerText = 'Sign In';
        document.getElementsByClassName('main-span')[0].remove();
        submitBtn.onclick = function () {
            if (!inputUserName.value || !inputPassword.value) {
                alert('Заполните пустые поля!')
            } else {
                alert('Добро пожаловать, ' + inputUserName.value + '!');
            }
        }
    }






}


