function Chronometer() {
  // time in centiseconds
  this.centiseconds = 0;
  this.seconds = 55;
  this.minutes = 0;
  this.intervalId = null;
  this.output = '00:00';
  this.startOrStop = 'START';
  this.resetOrSplit = 'Reset';
}

Chronometer.prototype.startClick = function () {
  var c = this;
  this.intervalId = setInterval(function () {
    c.centiseconds++;
    c.increaseTime();
  }, 10);
  this.startOrStop = 'STOP';
  this.resetOrSplit = 'SPLIT';
};

Chronometer.prototype.increaseTime = function () {
  if (this.centiseconds === 99) {
    this.seconds++;
    this.centiseconds = 0;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }
    timer.innerText = this.setTime();
  }
  mil.innerText = this.twoDigitsNumber(this.centiseconds);
};

Chronometer.prototype.setTime = function () {
  return this.twoDigitsNumber(this.minutes) + ':' + this.twoDigitsNumber(this.seconds);
};

Chronometer.prototype.twoDigitsNumber = function (num) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
  this.startOrStop = 'START';
  this.resetOrSplit = 'RESET';
};

Chronometer.prototype.resetClick = function () {
  this.centiseconds = 0;
  this.seconds = 0;
  this.minutes = 0;
  mil.innerText = '00';
  timer.innerText = '00:00';
  splits.innerText = '';
};

Chronometer.prototype.splitClick = function () {
  var split = document.createElement('li');
  split.innerText = this.setTime() + ':' + this.twoDigitsNumber(this.centiseconds);
  splits.appendChild(split);
};
