document.addEventListener('DOMContentLoaded', () => {
    let webApp = window.Telegram.WebApp;
    webApp.MainButton.isVisible = 'true';
    webApp.MainButton.setParams({
        'text': 'Регистрация',
        'color': '#F4D03F',
        'textColor': "#endregion",
    });
    Telegram.WebApp.onEvent('mainButtonClicked', () =>{
        let username = document.getElementById('username').value();
        let password = document.getElementById('password').value();
        let email = document.getElementById('email').value();
        webApp.sendData(username, password, email);
        webApp.close();
    })
}
);