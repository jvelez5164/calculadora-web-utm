/*
  ACTIVIDAD 3 - CALCULADORA WEB / UTM
  Integrantes: Juan Geovanny Bailón Reyes, Lisbeth Dayanna Monroy Zamora,
  Leidy Irene Párraga Reina y Jhonny Oscar Vélez Chávez.

  LEIDY IRENE PÁRRAGA REINA - SECCIÓN PARA EXPLICAR EN EL VIDEO:
  Lógica matemática: guardar operandos, elegir la operación y obtener el resultado.
*/

const resultado = document.querySelector('#resultado');
const operacion = document.querySelector('#operacion');
const aviso = document.querySelector('#aviso');
const teclado = document.querySelector('.teclado');

let numeroActual = '0';
let numeroAnterior = null;
let operador = null;
let nuevoNumero = false;

const simbolos = { '+': '+', '-': '−', '*': '×', '/': '÷' };

function mostrar() {
  resultado.textContent = numeroActual;
  document.querySelectorAll('.tecla-operador').forEach((boton) => {
    boton.classList.toggle('activa', boton.dataset.value === operador && nuevoNumero);
  });
}

function agregarNumero(digito) {
  if (numeroActual === 'Error' || nuevoNumero) {
    if (operador === null) operacion.textContent = '';
    numeroActual = digito;
    nuevoNumero = false;
  } else if (numeroActual.replace(/[-.]/g, '').length < 13) {
    numeroActual = numeroActual === '0' ? digito : numeroActual + digito;
  }
  aviso.textContent = 'También puedes utilizar el teclado de tu computadora.';
  aviso.classList.remove('error');
  mostrar();
}

function agregarDecimal() {
  if (nuevoNumero || numeroActual === 'Error') {
    if (operador === null) operacion.textContent = '';
    numeroActual = '0.';
    nuevoNumero = false;
  } else if (!numeroActual.includes('.')) {
    numeroActual += '.';
  }
  mostrar();
}

function calcular(a, b, signo) {
  switch (signo) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b === 0 ? null : a / b;
    default: return b;
  }
}

function normalizar(valor) {
  // Evita errores frecuentes de coma flotante, como 0.1 + 0.2.
  return String(Number(valor.toPrecision(12)));
}

function mostrarError() {
  numeroActual = 'Error';
  numeroAnterior = null;
  operador = null;
  nuevoNumero = true;
  operacion.textContent = 'División entre cero';
  aviso.textContent = 'No se puede dividir entre cero. Presiona AC para reiniciar.';
  aviso.classList.add('error');
  mostrar();
}

function seleccionarOperador(signo) {
  if (numeroActual === 'Error') return;

  if (operador !== null && !nuevoNumero) {
    const total = calcular(numeroAnterior, Number(numeroActual), operador);
    if (total === null || !Number.isFinite(total)) return mostrarError();
    numeroActual = normalizar(total);
    numeroAnterior = Number(numeroActual);
  } else if (numeroAnterior === null) {
    numeroAnterior = Number(numeroActual);
  }

  operador = signo;
  nuevoNumero = true;
  operacion.textContent = `${numeroAnterior} ${simbolos[operador]}`;
  mostrar();
}

function obtenerResultado() {
  if (operador === null || nuevoNumero || numeroActual === 'Error') return;

  const segundoNumero = Number(numeroActual);
  const total = calcular(numeroAnterior, segundoNumero, operador);
  if (total === null || !Number.isFinite(total)) return mostrarError();

  operacion.textContent = `${numeroAnterior} ${simbolos[operador]} ${segundoNumero} =`;
  numeroActual = normalizar(total);
  numeroAnterior = null;
  operador = null;
  nuevoNumero = true;
  mostrar();
}

function borrarTodo() {
  numeroActual = '0';
  numeroAnterior = null;
  operador = null;
  nuevoNumero = false;
  operacion.textContent = '';
  aviso.textContent = 'También puedes utilizar el teclado de tu computadora.';
  aviso.classList.remove('error');
  mostrar();
}

function borrarUltimo() {
  if (numeroActual === 'Error') return borrarTodo();
  if (nuevoNumero) {
    numeroActual = '0';
    nuevoNumero = false;
  } else {
    numeroActual = numeroActual.length > 1 ? numeroActual.slice(0, -1) : '0';
    if (numeroActual === '-') numeroActual = '0';
  }
  mostrar();
}

function cambiarSigno() {
  if (numeroActual === 'Error' || Number(numeroActual) === 0) return;
  numeroActual = numeroActual.startsWith('-') ? numeroActual.slice(1) : '-' + numeroActual;
  mostrar();
}

function porcentaje() {
  if (numeroActual === 'Error') return;
  numeroActual = normalizar(Number(numeroActual) / 100);
  mostrar();
}

/*
  JHONNY OSCAR VÉLEZ CHÁVEZ - SECCIÓN PARA EXPLICAR EN EL VIDEO:
  Eventos: detectar clics y teclas, y conectar cada botón con las funciones.
*/

function ejecutarAccion(accion, valor) {
  if (valor !== undefined && accion === 'number') return agregarNumero(valor);
  switch (accion) {
    case 'decimal': agregarDecimal(); break;
    case 'operator': seleccionarOperador(valor); break;
    case 'equals': obtenerResultado(); break;
    case 'clear': borrarTodo(); break;
    case 'backspace': borrarUltimo(); break;
    case 'sign': cambiarSigno(); break;
    case 'percent': porcentaje(); break;
  }
}

teclado.addEventListener('click', (evento) => {
  const boton = evento.target.closest('button');
  if (!boton) return;
  if (boton.dataset.number !== undefined) {
    ejecutarAccion('number', boton.dataset.number);
  } else {
    ejecutarAccion(boton.dataset.action, boton.dataset.value);
  }
});

document.addEventListener('keydown', (evento) => {
  const tecla = evento.key;
  if (/^[0-9]$/.test(tecla)) ejecutarAccion('number', tecla);
  else if (tecla === '.' || tecla === ',') ejecutarAccion('decimal');
  else if (['+', '-', '*', '/'].includes(tecla)) ejecutarAccion('operator', tecla);
  else if (tecla === 'Enter' || tecla === '=') ejecutarAccion('equals');
  else if (tecla === 'Backspace') ejecutarAccion('backspace');
  else if (tecla === 'Escape' || tecla === 'Delete') ejecutarAccion('clear');
  else if (tecla === '%') ejecutarAccion('percent');
  else return;
  evento.preventDefault();
});

mostrar();
