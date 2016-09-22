// $(document).ready(function() {
//   $('#roller button.add').on('click', function() {
//    $('.dice').append('<div class="die">0</div>');
//   });

//   $('#roller button.roll').on('click', function() {
//     $('.die').each(function(k, die) {
//       console.log(k)
//       var value = Math.floor((Math.random()*6)+1);
//       $(die).text(value);
//     });
//   });
// });


$(document).ready(function() {
  function Dice(maxSidesParam){
    this.sides = maxSidesParam;
  }

  Dice.prototype = {
    roll: function(){
      // $('.dice').append('<div class="die">0</div>');
    }
  }

  function View(){
    this.dices = 0;
  }

  View.prototype = {
    addDices: function(){
      $('.dice').append('<div class="die">0</div>');
    }
  }

  function Controller(view, model){
    this.view = view
    this.model = model
  }

  Controller.prototype = {
    listenAddBtn: function(){
      self = this;
      $('.add').click(function(event) {
        self.view.addDices()
      })
    },
    listenRollBtn: function(){
      self = this;
      $('.roll').click(function(event) {
        $('.die').each(function(k, die) {
          var value = Math.floor((Math.random()* self.model.sides )+1);
          $(die).text(value);
        });
      })
    }
  };

  var dice = new Dice(10)
  var view = new View()
  var controller = new Controller(view, dice)
  controller.listenAddBtn()
  controller.listenRollBtn()
  console.log(controller)
 });
