//Constructor
function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.resetBtn = element.querySelector('.reset');
  this.increaseBtn = element.querySelector('.increase');
  this.decreaseBtn = element.querySelector('.decrease');
  this.valueDOM = element.querySelector('#value');
  this.valueDOM.textContent = this.value;
  if (this.value > 0) {
    this.valueDOM.style.color = 'green';
  } else if (this.value < 0) {
    this.valueDOM.style.color = 'red';
  } else {
    this.valueDOM.style.color = 'blue';
  }
  //binds
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);
  //listeners
  this.increaseBtn.addEventListener('click', this.increase);
  this.resetBtn.addEventListener('click', this.reset);
  this.decreaseBtn.addEventListener('click', this.decrease);
}

//prototypes
Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
  if (this.value > 0) {
    this.valueDOM.style.color = 'green';
  }
};

Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
  if (this.value < 0) {
    this.valueDOM.style.color = 'red';
  }
};

Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
  this.valueDOM.style.color = 'blue';
};

//instance 1
const firstCounter = new Counter(getElement('.first-counter'), 10);

//instance 2
const secondCounter = new Counter(getElement('.second-counter'), -10);

//helper function
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error('element does not exist');
  }
}
