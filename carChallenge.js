function createNewCar(make1, model1, year1) {
  var speed = 0;
  var maxSpeed = 80;
  return {
    make: make1,
    model: model1,
    year: year1,
    getSpeed: function() {return speed;},
    accelerate: function() {
      speed += 10;
      if (maxSpeed < speed) {
        return "You're going too fast. your current speed is " + speed;
      } else {
        return "Your current speed is " + speed;
      };
    },
    brake: function() {
      speed -= 7;
      if (speed <= 0) {
        return "You came to a complete stop";
      } else {
        return "Slowing down...currently at " + speed + "mph";
      };
    },

    //create a loop that uses both accelerate and brake to drive-----------------------




    drive: function() {
      var i = 2
      while (i > 0) {
        if (speed < maxSpeed) {


          while (speed < maxSpeed){
            this.accelerate();
            console.log(speed);
          };


        } else if (speed >= 80) {
          speed = maxSpeed;


          while (speed > 0) {
            this.brake();
            console.log(speed);
          };


        } else if (speed < 0) {speed = 0};
        i--
      }
    }






    //------------------------------------------
  };

};
var car1 = createNewCar("BMW", "325CI", "2004");

car1.drive();
