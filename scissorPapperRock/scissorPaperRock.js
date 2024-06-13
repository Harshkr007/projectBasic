
// const score = {
//     win: 0,
//     lose: 0,
//     tie: 0
// };

// const scoreNew = JSON.parse(localStorage.getItem('score'));

// score.win = scoreNew.win;
// score.lose = scoreNew.lose;
// score.tie  = scoreNew.tie;

const score = JSON.parse(localStorage.getItem('score')) ||  {
    win: 0,
    lose: 0,
    tie: 0
};

function genrate() {
    const num = Math.random();
    let  val;

    if (num < 0.33) {
        val = `Scissor`;
    }else if(num < 0.66){
        val = `Paper`;
    }else if(num < 1){
        val = `Rock`;
    }

    return val;
}

    

function scoreUpdate(value) {
    if(value === `win`){
        score.win += 1;
    }else if(value === `lose`){
        score.lose += 1;
    }else if(value === `tie`){
        score.tie += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    alert("Win = "+score.win +"\n Lose = "+score.lose+"\n Tie = "+score.tie);
}

    function Reset(params) {
        score.win = 0;
        score.tie = 0;
        score.lose = 0;
        localStorage.setItem('score',JSON.stringify(score));
        alert(" Score reset \n Win = "+score.win +"\n Lose = "+score.lose+"\n Tie = "+score.tie);
    }

function winLose(value) {
    let val = genrate();
    if(val  == `Scissor`){
        if(value == 'Scissor'){
            console.log(" you choose scissor \n System choose scissor \n Its a tie");
            scoreUpdate(`tie`);
        }else if(value == `Rock`){
            console.log(" you choose Rock \n System choose scissor \n you win");
            scoreUpdate(`win`);
        }else{
            console.log(" you choose paper \n System choose scissor \n you lose");
            scoreUpdate(`lose`);
        }
    }else if(val == `Rock`){
        if(value == 'Scissor'){
            console.log(" you choose Scissor \n System choose Rock \n you lose");
            scoreUpdate(`lose`);
        }else if(value == `Rock`){
            console.log(" you choose Rock \n System choose Rock \n Its tie");
            scoreUpdate(`tie`);
        }else{
            console.log(" you choose paper \n System choose Rock \n you win");
            scoreUpdate(`win`);
        }
    }else if(val == `Paper`){
        if(value == 'Scissor'){
            console.log(" you choose scissor \n System choose Paper \n you win ");
            scoreUpdate(`win`);
        }else if(value == `Rock`){
            console.log(" you choose Rock \n System choose Paper \n you lose");
            scoreUpdate(`lose`);
        }else{
            console.log(" you choose paper \n System choose Paper \n Its tie");
            scoreUpdate(`tie`);
        }
    }
}

