/*let vectorButton = document.querySelector(".btn__vector");
const input = document.querySelector(".sentence");
console.log(input);

function checkInputs() {
  let allFilled = true;

  // Проверяем каждый инпут в контейнере

  if (input.value.trim() === "") {
    allFilled = false; // Если хотя бы один инпут пустой, устанавливаем false
  }

  // Разблокируем или блокируем кнопку в зависимости от состояния инпутов
  vectorButton.disabled = !allFilled;
}
input.addEventListener("input", checkInputs);



const myButton = document.getElementById('myButton');

// Функция для проверки классов и разблокировки кнопки
function checkInputs() {
    const inputs = document.querySelectorAll('[class^="input"]'); // выбираем все элементы, классы которых начинаются с 'input'
    let allFilled = true;

    // Проверяем каждый элемент
    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            allFilled = false; // Если хотя бы один инпут пустой, устанавливаем false
        }
    });

    // Разблокируем или блокируем кнопку в зависимости от состояния инпутов
    myButton.disabled = !allFilled;
}

// Добавляем обработчики события для каждого инпута
const inputs = document.querySelectorAll('[class^="input"]');
inputs.forEach(input => {
    input.addEventListener('input', checkInputs);
});*/



        const form = document.getElementById('myForm');
        const inputFieldsContainer = document.getElementById('inputFields');
        const icon = document.getElementById('icon');

        function checkInputs() {
            const inputs = inputFieldsContainer.querySelectorAll('input');
            let allFilled = true;

            // Проверяем, все ли инпуты заполнены
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    allFilled = false;
                }
            });

            // Проверяем количество инпутов
            if (allFilled && inputs.length > 3) {
                icon.className = 'fas fa-check-circle'; // Иконка "галочка"
            } else {
                icon.className = 'fas fa-question-circle'; // Иконка по умолчанию
            }
        }

        // Добавляем новый инпут
        document.getElementById('addInputBtn').addEventListener('click', () => {
            const newInputContainer = document.createElement('div');
            newInputContainer.className = 'input-container';
            newInputContainer.innerHTML = `
                <input type="text" placeholder="Введите текст" required>
                <button type="button" class="removeBtn">Удалить</button>
            `;
            inputFieldsContainer.appendChild(newInputContainer);

            // Добавляем обработчик для нового инпута
            newInputContainer.querySelector('input').addEventListener('input', checkInputs);
            newInputContainer.querySelector('.removeBtn').addEventListener('click', () => {
                inputFieldsContainer.removeChild(newInputContainer);
                checkInputs(); // Проверяем, обновляем ли состояние иконки
            });

            // Обновляем состояние иконки
            checkInputs();
        });

        // Изначально добавляем обработчики для первого инпута
        const initialInput = inputFieldsContainer.querySelector('input');
        initialInput.addEventListener('input', checkInputs);
    