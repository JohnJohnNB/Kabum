function countdown() {
  const acabaQuando = Date.parse("22 Nov 2022 17:00:00");
  var diaAgora = new Date();
  let tempoRestante = acabaQuando - diaAgora;
  let timerdias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
  let timerhoras = Math.floor(tempoRestante / (1000 * 60 * 60));
  let timerminutos = Math.floor(tempoRestante / (1000 * 60));
  let timersegundos = Math.floor(tempoRestante / 1000);
  dias = timerdias;
  horas = timerhoras - dias * 24;
  minutos = timerminutos - timerhoras * 60;
  segundos = timersegundos - timerminutos * 60;
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  document.getElementById(
    "tempoquefalta"
  ).innerHTML = `${dias}D ${horas}:${minutos}:${segundos}`;
}

setInterval(countdown, 1000);
