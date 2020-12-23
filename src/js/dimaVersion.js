import { colors, refs } from './contans' // импортиурем нужные компонеты (массив цветов, разерегстрированные кнопки)

const { $body, $startBtn, $stopBtn } = refs; 

$startBtn.addEventListener('click', handleStart);
$stopBtn.addEventListener('click', handleStop);

let intervalId = null; // создаем переменную айди интервала

function handleStart ({target}) {

    target.disabled = true; // фиксируем в тру состояние кнопки старт, чтобы было не возможно повторно запустить кнопку старт
    intervalId = setInterval(changeBodyBackgroundColor, 1000); // запускаем интервал изменения цветов 
}

function handleStop(){
    $startBtn.disabled = false; // фиксируем остановку изменения цветов 
    clearInterval(intervalId) // останавлияваем интервал изменения цветов
}

function changeBodyBackgroundColor(){ // функция изменения цвета бэкграунда
    const changeColor = colors[randomIntegerFromInterval(0, colors.length -1)]; // создаем переменную цвета бэкграунда 
    $body.style.backgroundColor = changeColor; // красит бэкрайнд боди
}

const randomIntegerFromInterval = (min, max) => { // Фу для выбора случайного индекса массива цветов
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

