document.addEventListener('DOMContentLoaded', () => {
    let webApp = window.Telegram.WebApp;
    webApp.MainButton.isVisible = 'true';
    webApp.MainButton.setParams({
        'text': 'Регистрация',
        'color': '#F4D03F',
        'textColor': '#region',
    });
    Telegram.WebApp.onEvent('mainButtonClicked', () =>{
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let email = document.getElementById('email').value;
        const requestUrl = 'http://127.0.0.1:5000/registration';
        const xhr = new XMLHttpRequest();
        xhr.open('POST', requestUrl);
        xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
        let data = {
            tg_user_id: 750899598,
            username: username,
            password: password,
            email: email,
        };
        xhr.send(JSON.stringify(data));
        webApp.close();
    })
}
);