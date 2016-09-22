/*$(document).ready(function() {
  $('#roller button.add').on('click', function() {
    $('.dice').append('<div class="die">0</div>');
  });

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    });
  });
});
*/
$(document).ready(function(){
	function randomNumber(){
		return Math.floor((Math.random()*6)+1);
	}
	
	function Dice(value){
		this.value = value
	}
	
	Dice.prototype.roll = function(){
		$('.die').each(function(k, die) {
			var anotherValue = randomNumber();
			$(die).text(anotherValue);
		});
	}
	
	function Player (){}

	Player.prototype.add = function(){
		$('#roller button.add').on('click', function() {
			$('.dice').append('<div class="die">0</div>');
		});
	}
	
	Player.prototype.rollListener = function(newDice){
		$('#roller button.roll').on('click', function() {
			newDice.roll();
		});
	} 
	
	function init(){
		var player = new Player();
		die = new Dice();
		player.add();
		player.rollListener(die);
	}  
	init();
});


