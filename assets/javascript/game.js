
// generate random number between 19-120
var winCount;
var lossCount;
var crystalsArray = [0,0,0,0];
var score = [];

function randomNumber()
{
    return Math.floor((Math.random() * 120) + 1);
}

$('.random').html(randomNumber);

//each crystal needs random number between 1-12
function randomCrystal()
{
    return Math.floor((Math.random() * 12) + 1);

}

function initializeGame() {
    winCount = 0;
    lossCount = 0;
    score = 0;
    for (i = 0; i < crystalsArray.length; i++){
            crystalsArray[i] = randomCrystal();
         //   $('arrayOfimages'[i]).text(crystalsArray[i]);
    }
    console.log(crystalsArray);
    // $('#ruby').(crystalsArray[0]);
    // $('#diamond').text(crystalsArray[1]);
    // $('#emerald').text(crystalsArray[2]);
    // $('#topaz').text(crystalsArray[3]);
    // var crystalValue = ($(this).attr("data-crystalvalue"));
    // crystalValue = parseInt(crystalValue);
  }

initializeGame();

//onclick button should add each value to total score

$("#ruby").on("click",function(){
    score = score + crystalsArray[0];
    $('#RunningScore').text(score);
});
$("#diamond").on("click",function(){
    score = score + crystalsArray[1];
    $('#RunningScore').text(score);
});
$("#emerald").on("click",function(){
    score = score + crystalsArray[2];
    $('#RunningScore').text(score);
});
$("#topaz").on("click",function(){
    score = score + crystalsArray[3];
    $('#RunningScore').text(score);
});


//if totalScore === random number wins++

//if totalscore > random number losses++

//reset game if win or lose