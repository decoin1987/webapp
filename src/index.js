const tg = window.Telegram.WebApp
console.log('tg ready')
// tg.initDataUnsafe.user.id // уникальный идентификатор пользователя
// tg.initDataUnsafe.user.isBot // бот ли пользователь (true/false)
// tg.initDataUnsafe.user.first_name // имя пользователя
// tg.initDataUnsafe.user.last_name // "фамилия" пользователя
// tg.initDataUnsafe.user.username // username пользователя
// tg.initDataUnsafe.user.language_code // код языка пользователя

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

let usercard = document.getElementById("usercard"); //получаем кнопку активировать/деактивировать
let profName = document.createElement('p'); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
//выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем
let userid = document.createElement('p'); //создаем еще параграф
userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
usercard.appendChild(userid); //добавляем
let btn = document.getElementById("btn"); //получаем кнопку активировать/деактивировать
btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
    if (tg.MainButton.isVisible){ //если кнопка показана
        console.log('Скрыли кнопку')
        tg.MainButton.hide() //скрываем кнопку
    }
    else{ //иначе
        console.log('показали кнопку')
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

tg.onEvent('mainButtonClicked', function(){
    tg.sendData("some string that we need to send");
    //при клике на основную кнопку отправляем данные в строковом виде
});