document.addEventListener('DOMContentLoaded', () => {
    let webApp = window.Telegram.WebApp;
    webApp.MainButton.isVisible = 'true';
    webApp.MainButton.setParams({
        'text': 'Регистрация',
        'color': '#F4D03F',
        'textColor': "#endregion",
    });
    Telegram.WebApp.onEvent('mainButtonClicked', () =>{webApp.close()})
}
);