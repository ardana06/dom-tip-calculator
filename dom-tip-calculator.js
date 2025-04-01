const bill = document.querySelector("#bill"); // Поле ввода суммы
const service = document.querySelector("#service"); // Селект выбора чаевых
const people = document.querySelector("#people"); // Поле ввода количества людей
const result = document.querySelector("#result"); // Поле вывода результата
const each = document.querySelector("#each"); // Текст "каждому"
const button = document.querySelector("button"); // Кнопка (исправлено!)
const tip = document.querySelector("#tip"); // Поле "Чаевые"

button.addEventListener("click", calculate);

function calculate() {
    let billValue = Number(bill.value); 
    let peopleValue = Number(people.value);
    let index = service.selectedIndex; 
    let tipPercentage = Number(service.options[index].value); 

    let totalTip = (billValue * tipPercentage) / 100; 

    tip.style.visibility = "visible"; 
    result.style.visibility = "visible"; 

    if (peopleValue > 1) {
        result.innerHTML = (totalTip / peopleValue).toFixed(2);
        each.style.visibility = "visible"; 
    } else {
        result.innerHTML = totalTip.toFixed(2);
        each.style.visibility = "hidden"; 
    }
}
