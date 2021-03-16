const computerPlay = (playerSelection,computerSelection) => {
    if(playerSelection==='Paper' && computerSelection==='Scissors'){
        return 'Player Lose and Computer Win';
    }
    else if(playerSelection==='Paper' && computerSelection=='Rock'){
        return 'Player Win and Computer Lose';
    }
    else if(playerSelection==='Rock' && computerSelection==='Paper'){
        return 'Player Lose and Computer Win';
    }
    else if(playerSelection==='Rock' && computerSelection==='Scissors'){
        return 'Player Win and Computer Lose';
    }
    else if(playerSelection==='Scissors' && computerSelection==='Rock'){
        return 'Player Lose and Computer Win';
    }
    else if(playerSelection==='Scissors' && computerSelection==='Paper'){
        return 'Player Win and Computer Lose'
    }
    else{
        return 'Play Well';
    }
}
let player=prompt('Player');
let computer=prompt('Computer');
console.log(computerPlay(player,computer));

const game = () =>{
    player=prompt('Player');
    computer=prompt('Computer');
    return computerPlay(player,computer);
}
for(let i=0;i<5;i++){
    console.log(game());
}