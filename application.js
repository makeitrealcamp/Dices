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
  function Dice( sides ){
    this.sides =  sides ;
    this.currentSide = 0;
  }

  Dice.prototype = {
    roll: function(){
      this.currentSide = Math.floor((Math.random()* this.sides )+1);
    }
  }

  function View(){
    this.dices = [];
  }

  View.prototype = {
    addDices: function(sides){
      this.dices.push( new Dice(sides) );
    },
    render: function(){
      $('.dice').empty();
      $( this.dices ).each(function(k, die) {
        $('.dice').append(`<div class="die"> ${ die.currentSide } </div>`);
      });

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
        self.view.addDices(10);
        self.view.render();
      })
    },
    listenRollBtn: function(){
      self = this;
      $('.roll').click(function(event) {

        for (var diceIndex in self.view.dices) {
          self.view.dices[diceIndex].roll();
        }
        // console.log(self)
        self.view.render();

      })
    }
  };

  var dice = new Dice(10)
  var view = new View()
  var controller = new Controller(view, dice)
  controller.listenAddBtn()
  controller.listenRollBtn()

 });
