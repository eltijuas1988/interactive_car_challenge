$(document).ready(function(){
  var speed = 0;
  var maxSpeed = 85;
  var newCar;

  $("#blink").toggle();
  //Create a function that will work with the input button
  $("#inputButton").click(function(){
    //create a variable new car that is assigned a string with the value inputted in the field "yearInput" plus "makeInput" plus "modelInput"
    newCar = "Your new car is: " + $("#yearInput").val() + " " + $("#makeInput").val() + " " + $("#modelInput").val();
    //Once the button linked to the function 'inputButton' is clicked, hide all the text fields and all the input fields for creating a car
    $("#year, #yearInput, #make, #makeInput, #model, #modelInput, #inputButton").hide();
    //Place all the information from new car and place it in a text field to be displayed on the page
    $("#createCar").text(newCar);

  });
  // this function will be initiated once the accelerate button is clicked
  $("#accelerate").click(function(){

    //condition that matches speed to 0
    if (speed >= 0){
      // changing the element with ID speed by adding 10 and displaying on the page
      $("#speed").text(speed += 10);
      // if condition is met the brake button will be enabled
      $("#brake").prop('disabled', false);
    }
    // condition that matches speed to maxSpeed
    if(speed >= maxSpeed) {
      $("#blink").toggle();
      // if condition is met, accelerate button will be disabled
      $("#accelerate").prop('disabled', true);
      //...and the speed will be changed to maxSpeed because the car is not allowed to go above the maxSpeed
      $("#speed").text(maxSpeed);
    }
  });


  // this function will be initiated once the brake button is clicked
  $("#brake").click(function(){
    $("#blink").hide();
    // changing the element with the ID brake by subtracting by 10
    $("#speed").text(speed -= 10)
    // condition that matches speed to maxSpeed
    if(speed <= maxSpeed) {
      // if condition is met, accelerate button will be enabled
      $("#accelerate").prop('disabled', false);
    }
    // condition that checks if speed is less than or equal to zero
    if(speed <= 0) {
      // if conditon is met, brake button will be disabled
      $("#brake").prop('disabled', true);
    }
  })

});
