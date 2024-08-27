let sentenceCount = 0;
let addButton = document.querySelector(".btn__addSentence");
let removeButton = document.querySelector(".btn__removeSentence");
let vectorButton = document.querySelector(".btn__vector");
let visualizationButton = document.querySelector(".btn__visualization");
let inputContainer = document.querySelector(".form__container");
let select = document.querySelector(".embedding-method");
let getForm = document.querySelector(".main__form");
let myIcon = document.querySelector(".myIcon");
let resultIconValue = document.querySelector(".result-icon-value");
let resultIconModel = document.querySelector(".result-icon-model");

/* addButton.addEventListener("click", function() {
      // Создаем новый div для поля ввода и кнопки удаления
      var inputDiv = document.createElement("div");

      // Создаем новое поле ввода
      var inputField = document.createElement("input");
      inputField.type = "text";
      inputField.className = `sentence-${sentenceCount}`;
      inputField.placeholder = 'Введите текст';
      
      inputField.name = "inputField[]"; // Можно использовать массив для обработки
      inputField.style.backgroundColor = "rgba(202,218,186, 0.2)";
      inputField.style.border = "none";
      inputField.style.borderRadius = "5px";
      sentenceCount++;

      // Создаем кнопку удаления
           
        var deleteButton = document.createElement("i");
        deleteButton.className = "fa fa-trash-o"; // Замените на нужный класс иконки Font Awesome
        deleteButton.style.cursor = "pointer"; // Меняем курсор, чтобы показать, что это интерактивный элемент
        deleteButton.style.color = "#30BA8F" ;
        deleteButton.style.paddingLeft = "5px"
    
        
      // Добавляем обработчик для кнопки удаления
      deleteButton.addEventListener("click", function() {
          inputContainer.removeChild(inputDiv);
          sentenceCount--;
      });

      // Добавляем поле ввода и кнопку удаления в div
      inputDiv.appendChild(inputField);
      inputDiv.appendChild(deleteButton);

      // Добавляем div в контейнер
      inputContainer.appendChild(inputDiv);
  });
console.log(sentenceCount);*/

/*Добавить пустую строку*/
function addSentence() {
  let inputDiv = document.createElement("div");

  // Создаем новое поле ввода
  var inputField = document.createElement("input");
  inputField.type = "text";
  inputField.className = `sentence-${sentenceCount}`;
  inputField.placeholder = "Введите текст";

  inputField.name = "inputField[]"; // Можно использовать массив для обработки
  inputField.style.backgroundColor = "rgba(202,218,186, 0.2)";
  inputField.style.border = "none";
  inputField.style.borderRadius = "5px";

  // Создаем кнопку удаления

  var deleteButton = document.createElement("i");
  deleteButton.className = "fa fa-trash-o"; // Замените на нужный класс иконки Font Awesome
  deleteButton.style.cursor = "pointer"; // Меняем курсор, чтобы показать, что это интерактивный элемент
  deleteButton.style.color = "#30BA8F";
  deleteButton.style.paddingLeft = "5px";

  sentenceCount++;

  deleteButton.addEventListener("click", function () {
    inputContainer.removeChild(inputDiv);
    sentenceCount--;
    enableSubmitButton();
    });

  // Добавляем поле ввода и кнопку удаления в div
  inputDiv.appendChild(inputField);
  inputDiv.appendChild(deleteButton);

  // Добавляем div в контейнер
  inputContainer.appendChild(inputDiv);
  console.log(sentenceCount);

  const inputs = document.querySelectorAll('[class^="sentence"]');
  inputs.forEach((input) => {
    input.addEventListener("input", enableSubmitButton);
  });
}

function enableSubmitButton() {
  let allFilled = true;
  let inputs = document.querySelectorAll('[class^="sentence"]');

      
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        allFilled = false; // Если хотя бы один инпут пустой, устанавливаем false
               
      }
      vectorButton.disabled = !allFilled;
     
      // Разблокируем или блокируем кнопку в зависимости от состояния инпутов
    });
    if ( inputs.length >= 3) {
      resultIconValue.className = 'fa fa-check'; // Измените на нужную иконку
      resultIconValue.style.color = "green";
  } else {
     resultIconValue.className = 'fa fa-times'; // Иконка по умолчанию
     resultIconValue.style.color = "red";
     vectorButton.disabled = allFilled;
  }

      // Изменяем иконку в зависимости от статуса заполненности
            
        }

/*}*/

getForm.addEventListener("submit", function (event) {
  // Проверяем, выбрано ли значение в select
  if (select.value === "") {
    // Если ничего не выбрано, предотвращаем отправку формы
    event.preventDefault(); // Предотвращает отправку формы
    select.style.border = "2px solid red";
    resultIconModel.className = "fa fa-times";
    resultIconModel.style.color = "red";
  } else { 
    select.style.border = "none";
    
  }
});

select.addEventListener('change',  (event) => {
  
  resultIconModel.className = "fa fa-check";
  resultIconModel.style.color = "green";
  if (select.value === ""){
    resultIconModel.className = "fa fa-times";
    resultIconModel.style.color = "red";
  }
});
/*Скрыть/показать картинку*/

function toggleVisualization() {
  const visualization = document.querySelector(".visualization");

  if (visualization.style.display === "none") {
    visualization.style.display = "block";
    visualizationButton.textContent = "Скрыть";
    myIcon.className = "fa fa-eye-slash";
    visualizationButton.appendChild(myIcon);
  } else {
    visualization.style.display = "none";
    visualizationButton.textContent = "Показать";
    myIcon.className = "fa fa-eye";
    visualizationButton.appendChild(myIcon);
  }
}

/*отправка данных на сервер*/

/*function getVectors() {
  const sentences = [];
  for (let i = 0; i < sentenceCount; i++) {
      const sentence = document.querySelector(`.sentence-${i}`).value;
      sentences.push(sentence);
  }
  const embeddingMethod = document.querySelector('.embedding-method').value;
  
  fetch('/get_vectors', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sentences, embedding_method: embeddingMethod }),
})
.then(response => response.json())
.then(data => {
    const img = document.querySelector('.plot');
    img.src = 'data:image/png;base64,' + data.plot;
    document.querySelector('.visualization').style.display = 'block';
});
}*/

addButton.addEventListener("click", addSentence);
/*deleteButton.addEventListener('click', removeSentence);*/
visualizationButton.addEventListener("click", toggleVisualization);
// Позже можем разблокировать ее
enableSubmitButton(vectorButton);
/*vectorButton.addEventListener('click', getVectors);*/
