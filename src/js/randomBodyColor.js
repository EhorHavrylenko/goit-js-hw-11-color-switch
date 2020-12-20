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
let isActive = false; // переменная для проверки активен ли запуск изменения фона

function startHandler(){
    if(isActive){ // предотвращаем повторный запуск
        return;
    }
    isActive = true; // присваиваем тру после клика

  const startId = setInterval(() => {
        bodyRef.style.backgroundColor = colors[Math.floor(Math.random() * 6)] // рендомно выбираем индекс из массива для окраски фона
    },1000)

    stopBtn.addEventListener('click', stopHandler);

    function stopHandler(){ 
        clearInterval(startId) // останавливаем изменение фона по айди запуска
        isActive = false; // возвращаем в Фолс индикатор актиновсти изменения фона
     }
}






 
