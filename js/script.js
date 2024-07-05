// Determina e atualiza a cada 30s o status de Aberto ou Fechado do restaurante, conforme o horário e dia de funcionamento.
function changeStatus() {
  const status = document.getElementById('status');

  const now = new Date();
  const weekDay = now.getDay();
  const hour = now.getHours();

  if (weekDay !== 0 && hour >= 7 && hour < 18) {
    status.classList.remove('closed');
    status.classList.add('open');
    status.style.display = 'inline-block';
  } else {
    status.classList.remove('open');
    status.classList.add('closed');
    status.style.display = 'inline-block';
  }
}

// Execuçao inicial
changeStatus();

// Intervalo de tempo de 20s para atualizar o status
setInterval(changeStatus, 20000);
