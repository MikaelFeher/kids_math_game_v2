masterReset();

$(document).ready(function() {
	theGame();
});

function theGame() {
	$('#player_name_input_button').on('click', function(){
		let playerNameInput = $('#player_name_input');
		let playerGuess = ''

		if(playerNameInput.val()){
			playerName = playerNameInput.val();
			resetGame();

			$('.number_buttons').on('click', function() {
				playerGuess += $(this).text();
				console.log(playerGuess);
				$('#sum').text(playerGuess);
			})

			$('#player_guess_button').on('click', function() {
				let firstNumber = parseInt($('#first_number').text());
				let secondNumber = parseInt($('#second_number').text());
				let sum = parseInt($('#sum').text());
				let result = firstNumber + secondNumber;

				$('#clear_button, #player_guess_button').hide();
				$('#reset_game_button').show();

				if (result === sum) {
					$('#result_output').css('backgroundColor', 'green').text('Rätt Gissat!');
				} else {
					$('#result_output').css('backgroundColor', 'red').text(`Det blev tyvärr fel. Rätt svar är ${result}`);
				}

			})

			$('#clear_button').on('click', function() {
				playerGuess = '';
				$('#sum').text('?');
			})

			$('#reset_game_button').on('click', function() {
				resetGame();
			})

			function resetGame() {
				$('#main_game_container').show();
				$('#player_id_container').hide();
				$('#player_name_display').text(playerName);
				$('#first_number').text(randNumGen());
				$('#second_number').text(randNumGen());
				$('#clear_button, #player_guess_button').show();
				playerGuess = '';
				$('#sum').text('?');
				$('#result_output').css('backgroundColor', '').text('');
				$('#reset_game_button').hide();
			};
		}
	})

	$('#quit_button').on('click', function() {
		masterReset();
	})

	function randNumGen() {
		return Math.floor(Math.random()*10 + 1)
	}
}

function masterReset() {
	$('#main_game_container').hide();
	let playerName = '';
	$('#player_id_container').show();
	$('#player_name_input').val('').focus();
	$('#reset_game_button').hide();
}
