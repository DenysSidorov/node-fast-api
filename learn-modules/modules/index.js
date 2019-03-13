var EventEmmiter = require('events');

class MyCl extends EventEmmiter {

  constructor(args) {
    super(args);
    this.count = 0;
  }

  start() {

    var self = this;
    this.ownInterval = setInterval(function () {
        self.tick();
      },
      100
    );
    this.emit('start');
  }

  tick() {
    this.count++;
    if (this.count <= 10) {
      this.emit('data', this.count);

    } else {
      this.end();
    }


  }

  end() {
    clearInterval(this.ownInterval);
    this.emit('end');
  }
}

var myInstance = new MyCl();

myInstance.start();

myInstance.on('start', function () {
  console.log('STAAAART');
})

myInstance.on('end', function () {
  console.log('EEENNNDD');
})

myInstance.on('data', function (data) {
  console.log(data);
})

module.exports = MyCl;