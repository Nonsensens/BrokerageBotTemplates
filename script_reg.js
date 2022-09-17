document.addEventListener('DOMContentLoaded', () => {
    let webApp = window.Telegram.WebApp;
    webApp.MainButton.isVisible = 'true';
    webApp.MainButton.setParams({
        'text': 'Регистрация',
        'color': '#F4D03F   ',
    });
    webApp.MainButton.onClick(() =>{
        webApp.close();
    });
}
);