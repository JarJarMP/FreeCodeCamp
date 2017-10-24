class Calculator {
  constructor (config, d3) {
    if (d3) {
      this.d3 = d3;
    } else {
      throw new Error(`Calculator initialization failed, missing d3!`);
    }

    getRequiredControls().forEach(control => {
      if (config[control]) {
        this[control] = config[control];
      } else {
        throw new Error(`Calculator initialization failed, missing ${control}!`);
      }
    });

    this.init();
  }

  init () {
    this.reset();
    this.bindControls();
  }

  reset () {
    this.queue = [];
    this.decimalMarker = false;
    this.lastItemType = null;
    this.refreshDisplayQueue();
    this.refreshDisplayResult();
  }

  refreshDisplayQueue () {
    this['display-queue']
      .html('')
      .append('p')
      .text(this.queue.join(''));
  }

  refreshDisplayResult () {
    this['display-result']
      .html('')
      .append('p')
      .text('-');
  }

  bindControls () {
    // numbers
    for (let i = 0; i < 10; i++) {
      this[`button-${i}`]
        .on('click', function () {
          d3.event.preventDefault();
          this.handleInputNumber(i);
        }.bind(this));
    }

    // other actions
    this['button-decimal']
      .on('click', function () {
        d3.event.preventDefault();
        this.decimalMarker = true;
      }.bind(this));

    this['button-divide']
      .on('click', function () {
        d3.event.preventDefault();
      });

    this['button-equal']
      .on('click', function () {
        d3.event.preventDefault();
      });

    this['button-minus']
      .on('click', function () {
        d3.event.preventDefault();
      });

    this['button-modulo']
      .on('click', function () {
        d3.event.preventDefault();
      });

    this['button-multiply']
      .on('click', function () {
        d3.event.preventDefault();
      });

    this['button-plus']
      .on('click', function () {
        d3.event.preventDefault();
      });
  }

  handleInputNumber (number) {
    let newNumber = null;

    if (this.lastItemType === 'number') {
      let current = this.queue.pop();
      current = String(current).split('');
      current.push(`${number}`);
      newNumber = Number(current.join(''));
      this.lastItemType = 'number';

    } else if (this.decimalMarker === true) {
      let current = this.queue.pop();
      current = String(current).split('');
      current.push(`.${number}`);
      newNumber = Number(current.join(''));
      this.decimalMarker = false;
      this.lastItemType = 'decmialMarker  ';

    } else {
      newNumber = number;
      this.lastItemType = 'number';
    }

    this.queue.push(newNumber);

    this.refreshDisplayQueue();
    this.refreshDisplayResult();
  }
}

const getRequiredControls = () => [
  'display-queue',
  'display-result',
  'button-0',
  'button-1',
  'button-2',
  'button-3',
  'button-4',
  'button-5',
  'button-6',
  'button-7',
  'button-8',
  'button-9',
  'button-AC',
  'button-CE',
  'button-decimal',
  'button-divide',
  'button-equal',
  'button-minus',
  'button-modulo',
  'button-multiply',
  'button-plus'
];
