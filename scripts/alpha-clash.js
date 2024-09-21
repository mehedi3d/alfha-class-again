// function play (){
//    const homeSection=document.getElementById('home-section');
//    console.log(homeSection);
//    homeSection.classList.add('hidden')

//    const playgamesection=document.getElementById('playgamesection');
//    playgamesection.classList.remove('hidden')
// }




function handleKeyupEvent(event){
  const playerprssed=event.key;
  console.log('player',playerprssed)

  if(playerprssed==='Escape'){
    gameOver()
  }

  const currentAlphabetEvent=document.getElementById('current-alphabet');
  
  const currentAlphabet=currentAlphabetEvent.innerText;
  const expectedAlphabet=currentAlphabet.toLowerCase();
  console.log(playerprssed,expectedAlphabet);

  if(playerprssed===expectedAlphabet){

    const currentScore=gettextElementValuebyId('current-score');
    console.log(currentScore);
    const updatedScore=currentScore+1;
    settexElementValuebyId('current-score', updatedScore)


    //---------------------
    // console.log('YOU win a point');
    // //locat the current score
    // const currentscoreelement=document.getElementById('current-score');
    // const currentscoretext=currentscoreelement.innerText;
    // const currentscore=parseInt(currentscoretext)
    // // increes the score
    // const newScore=currentscore+1;
    // // show the newscore
    // currentscoreelement.innerText=newScore;
    

    removedBackgroundCoulorbyID(expectedAlphabet)
    continuGame();
  }
  else{

    const currentlife=gettextElementValuebyId('current-life');
    const updatedlife=currentlife-1;
    settexElementValuebyId('current-life',updatedlife)

      if(updatedlife===0){
        gameOver()
      }
    //-----------------------
    // console.log('you lose a point')
    // const currentlifeElement=document.getElementById('current-life');
    // const currentlifeText=currentlifeElement.innerText;
    // const currentlife=parseInt(currentlifeText);
    // console.log(currentlife,'current life')

    // const newlife=currentlife-1;

    // currentlifeElement.innerText=newlife;
  }
}
document.addEventListener('keyup',handleKeyupEvent)

function continuGame(){
  const alphabet=  getArandonAlphabet();
  console.log('your random alphabet',alphabet);
  const currentAlphabet=document.getElementById('current-alphabet');
  currentAlphabet.innerText=alphabet;

  addBanckgroundcolorbyId(alphabet)

}

function play(){
    hideelementid('home-section')
    hideelementid('final-score')
    addelementid('playgamesection');
  
    settexElementValuebyId('current-life',5);
    settexElementValuebyId('current-score',0)

    continuGame();
}
function gameOver(){
hideelementid('playgamesection');
addelementid('final-score');

const lastScore=gettextElementValuebyId('current-score');
console.log('last-score', lastScore);
settexElementValuebyId('last-score',lastScore)

const currentAlphabet=getElementtextbyID('current-alphabet');
console.log('current',currentAlphabet)
removedBackgroundCoulorbyID(currentAlphabet)
}