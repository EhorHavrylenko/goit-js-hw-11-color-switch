const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const bodyRef = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', startHandler);
stopBtn.addEventListener('click', stopHandler)

let intervalId = null;

function startHandler({ target }){
  target.disabled = true;
  intervalId = setInterval(() => {
        bodyRef.style.backgroundColor = colors[Math.floor(Math.random() * 6)] // рендомно выбираем индекс из массива для окраски фона
    },1000)

}

function stopHandler({target}){ 
  startBtn.disabled = false;
  clearInterval(intervalId) // останавливаем изменение фона по айди запуска
}






 
