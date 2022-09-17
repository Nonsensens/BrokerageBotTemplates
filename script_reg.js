window.onload = function(){
    let webApp = window.Telegram.WebApp
    let but = document.getElementById("button_reg");
    but.onclick = function(){
        webApp.close()
    };
};