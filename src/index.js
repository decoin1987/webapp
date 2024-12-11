const tg = window.Telegram.WebApp

tg.initDataUnsafe.user.id // уникальный идентификатор пользователя
tg.initDataUnsafe.user.isBot // бот ли пользователь (true/false)
tg.initDataUnsafe.user.first_name // имя пользователя
tg.initDataUnsafe.user.last_name // "фамилия" пользователя
tg.initDataUnsafe.user.username // username пользователя
tg.initDataUnsafe.user.language_code // код языка пользователя

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

let btn = document.getElementById("btn"); //получаем кнопку активировать/деактивировать
console.dir(tg.initDataUnsafe)

btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
    if (tg.MainButton.isVisible){ //если кнопка показана
        tg.MainButton.hide() //скрываем кнопку
    }
    else{ //иначе
        tg.MainButton.show() //показываем
    }
});

let btnED = document.getElementById("btnED"); //получаем кнопку активировать/деактивировать
btnED.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
    if (tg.MainButton.isActive){ //если кнопка показана
        tg.MainButton.setParams({"color": "#E0FFFF"}); //меняем цвет
        tg.MainButton.disable() //скрываем кнопку
    }
    else{ //иначе
        tg.MainButton.setParams({"color": "#143F6B"}); //меняем цвет
        tg.MainButton.enable() //показываем
    }
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.sendData("some string that we need to send");
    //при клике на основную кнопку отправляем данные в строковом виде
});