window.onload = function(){
    let webApp = window.Telegram.WebApp
    webApp.MainButton.isVisible = 'true';
    webApp.MainButton.setParams({
        'text': 'Регистрация',
        'color': '00000'
    })
    webApp.MainButton.onClick = () => {
        webApp.close();
    };
};