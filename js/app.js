const inputRub = document.getElementById("rub");
//const inputName = document.getElementById("currName").value;
const inputValue = document.getElementById("currVal");

inputRub.addEventListener('input', () => {
  let request = new XMLHttpRequest();
  // Метод open(method, url, async, login, password) принимает 4 аргумента
  request.open('GET', 'js/current.json');
  // setRequestHeader — в данном случае необязательный параметр
  // но так как запрос состоит из тела(body) и заголовков(headers)
  // то желательно указать
  request.setRequestHeader('Content-Type', 'application/json; charset=utf8');
  
    
    // Отправка запроса
    request.send()
    
  
  // После отправки запроса у переменной появляются следующие свойства
  // status
  // statusText
  // responseText / response
  // readyState

  // Проверяем изменения страницы 
  // на readystatechange — изменение состояния запроса
  request.addEventListener('readystatechange', () => {
    // readyState — состояние запроса
    // status — статус запросы 
    // ссылки в презе
    if(request.readyState === 4 && request.status === 200) {
      var data = JSON.parse(request.response);
      inputValue.value = data.usdValue;
    } else {
      inputValue.value = "Something went wrong and fuck you"
    }
    /*
    if(request.readyState === 4 && request.status === 200) {

      // Здесь превращаем строку в JSON-объект
      var data = JSON.parse(request.response);
      //
      if(inputName === "USD"){
        inputValue.value = inputRub.value / data.usdValue + data.usdName;
      }
      else if(inputName === "EURO"){
        inputValue.value = inputRub.value / data.euroValue + data.euroName;
      }
      else {
        inputValue.value = null;
      }
      //
      // Выдергиваем значение data.usdValue из полученных данных
      // и меняем inputUsd.value
      //inputUsd.value = inputRub.value / data.usdValue;
      inputValue.value = (inputRub.value / data.usdValue).toFixed(2) 
      + " " + data.usdName;
    } else {
      inputValue.value = "Something went wrong and fuck you"
    }
    */
  })
})