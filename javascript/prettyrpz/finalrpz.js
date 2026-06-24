let score = JSON.parse(localStorage.getItem('score')); 
        if (score === null) {
            score = {
                win: 0,
                loose: 0,
                draw: 0
            };
        }

        /*
        let score = JSON.parse(localStorage.getItem('score'))||
                {
                    win: 0,
                    loose: 0,
                    draw: 0
                };
        */
        document.querySelector('.result-message').innerHTML = `wins: ${score.win}, losses: ${score.loose}, draws: ${score.draw}`;
        
        function printResult(result) {
            document.querySelector('.js-result').innerHTML = `${result}`;
        }


        function countscore(result) {
            if (result === 'you win') {
                score.win += 1;
            } else if (result === 'you lose') {
                score.loose += 1;
            } else {
                score.draw += 1;
            }

        }

        function updateScore() {
            document.querySelector('.result-message').innerHTML = `wins: ${score.win}, losses: ${score.loose}, draws: ${score.draw}`;
        document.getElementById('win-score').textContent = score.win;
        document.getElementById('loose-score').textContent = score.loose;
        document.getElementById('draw-score').textContent = score.draw;
        localStorage.setItem('score', JSON.stringify(score));   
        }

        function resetScore() {
            score.win = 0;
            score.loose = 0;
            score.draw = 0;
            updateScore();
            alert('score reset');
        }

        function outputting(computermove, move){
            document.querySelector('.js-moves').innerHTML = `
             you chose 
            <img src="${move}.png" class="move-icon" id="player-move-icon">
            computer chose
            <img src="${computermove}.png" class="move-icon" id="computer-move-icon">
            `;
            }

        function playermove(move){
            const computermove = pickcomputerMove();
            var result = '';
            if (move === 'rock') {
                if (computermove ==='rock') {
                    result = 'you tie';
                } else if (computermove === 'paper') {
                    result = 'you lose';
                } else {
                    result = 'you win';
                }
            }
            else if(move === 'paper') {
                if (computermove ==='paper') {
                    result = 'you tie';
                } else if (computermove === 'scissors') {
                    result = 'you lose';
                } else {
                    result = 'you win';
                }
            }
            else {
                if (computermove ==='scissors') {
                    result = 'you tie';
                } else if (computermove === 'rock') {
                    result = 'you lose';
                } else {
                    result = 'you win';
                }
            }
            alert(`computer chose ${computermove} and ${result}`);
            countscore(result);
            updateScore(); 
            printResult(result);
            outputting(computermove, move);
        }
    
        function pickcomputerMove() {
            var randomnumber = Math.random();
            let computermove = '';
            if (randomnumber >= 0 && randomnumber < 1/3) {
                computermove = 'rock';
            } else if (randomnumber > 1/3 && randomnumber < 2/3) {
                computermove = 'paper';
            } else {
                computermove = 'scissors';
            }
            console.log(computermove);
            return computermove;
            outputting(computermove, move); 
        }
        updateScore();