// $(document).ready(function() {
//   $('#roller button.add').on('click', function() {
//     $('.dice').append('<div class="die">0</div>');
//   });
//
//   $('#roller button.roll').on('click', function() {
//     $('.die').each(function(k, die) {
//       var value = Math.floor((Math.random()*6)+1);
//       $(die).text(value);
//     });
//   });
// });


// $(document).ready(function() {
  function Dice(maxSidesParam){

    this.sides = maxSidesParam
  }
  function View(){
    this.dices = 0

  }

  function Controller(view, model){
    this.view = view
    this.model = model

  }
  Controller.prototype = {
    listenButton: function(){
      $('.add').click(function(event) {
        console.log("add clicked")
      });
    }
  };
  var dice = new Dice(10)
  var view = new View()
  var controller = new Controller(view, dice)
  controller.listenButton()
  console.log(controller)
 // });
