document.addEventListener('DOMContentLoaded', () => {
    let webApp = window.Telegram.WebApp;
    webApp.MainButton.isVisible = 'true';
    webApp.MainButton.setParams({
        'text': 'Войти',
        'color': '#F4D03F',
        'textColor': '#region',
    });
    Telegram.WebApp.onEvent('mainButtonClicked', () =>{
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        const requestUrl = 'http://127.0.0.1:5000/login';
        const xhr = new XMLHttpRequest();
        xhr.open('POST', requestUrl);
        xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
        let data = {
            username: username,
            password: password,
        };
        xhr.send(JSON.stringify(data));
        webApp.close();
    })
}
);