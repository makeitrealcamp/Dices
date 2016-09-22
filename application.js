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
    listenAddBtn: function(){
      $('.add').click(function(event) {
        console.log("add")
      })
    },
    listenRollBtn: function(){
      $('.roll').click(function(event) {
        console.log("roll")
      })
    }
  };

  var dice = new Dice(10)
  var view = new View()
  var controller = new Controller(view, dice)
  controller.listenAddBtn()
  controller.listenRollBtn()
  console.log(controller)
 // });
