var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var mil = document.getElementById('mil');
var timer = document.getElementById('time');
var splits = document.getElementById('splits');

function setBtns(running) {
  if (running) {
    btnLeft.className = 'btn stop';
    btnRight.className = 'btn split';
  } else {
    btnLeft.className = 'btn start';
    btnRight.className = 'btn reset';
  }
}

btnLeft.addEventListener('click', function () {
  if (chronometer.startOrStop === 'START') {
    chronometer.startClick();
    setBtns(true);
  } else {
    chronometer.stopClick();
    setBtns(false);
  }
  btnLeft.innerText = chronometer.startOrStop;
  btnRight.innerText = chronometer.resetOrSplit;
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (chronometer.resetOrSplit === 'RESET') {
    chronometer.resetClick();
  } else {
    chronometer.splitClick();
  }
});
