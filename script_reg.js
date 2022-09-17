window.onload = function(){
    let webApp = window.Telegram.WebApp
    webApp.MainButton.isVisible = 'true';
    webApp.MainButton.onclick{() =>{
        webApp.close()
    };

    };
};