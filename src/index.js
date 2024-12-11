const tg = window.Telegram.WebApp
console.log('tg ready')
const userId = tg.initDataUnsafe.user.id || 'хуй' // уникальный идентификатор пользователя
const userBot = tg.initDataUnsafe.user.isBot || 'хуй' // бот ли пользователь (true/false)
const userName = tg.initDataUnsafe.user.first_name || 'хуй' // имя пользователя
const userLast = tg.initDataUnsafe.user.last_name || 'хуй' // "фамилия" пользователя
const userUsername = tg.initDataUnsafe.user.username || 'хуй' // username пользователя
const userLang = tg.initDataUnsafe.user.language_code || 'хуй' // код языка пользователя

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

let usercard = document.getElementById("usercard"); //получаем кнопку активировать/деактивировать
let profName = document.createElement('p'); //создаем параграф

profName.innerText = `
    ты - ${userId}, и лошадь твоя ${userName}
`; //выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем
let userid = document.createElement('p'); //создаем еще параграф
userid.innerText = `${tg?.initDataUnsafe?.user.id}`; //показываем user_id
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
tg.MainButton.onclick(() => {
    tg.MainButton.setText('text')
})
tg.onEvent('mainButtonClicked', () =>{
    tg.sendData("some string that we need to send");
    userid.innerText = `lol`;
    //при клике на основную кнопку отправляем данные в строковом виде
});
