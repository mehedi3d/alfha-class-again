function hideelementid(elementid){
    const hideelement=document.getElementById(elementid)
    hideelement.classList.add('hidden')
}

function addelementid(elementid){
    const addelement=document.getElementById(elementid)
    addelement.classList.remove('hidden')
}

function addBanckgroundcolorbyId(elementid){
    const backgrounid=document.getElementById(elementid);
    backgrounid.classList.add('bg-orange-400')
}
function removedBackgroundCoulorbyID(elementid){
    const backgrounid=document.getElementById(elementid);
    backgrounid.classList.remove('bg-orange-400')
}
function getElementtextbyID(elementid){
    const element=document.getElementById(elementid);
    const text=element.innerText;
    return text;
}

function gettextElementValuebyId(elementid){
    const element=document.getElementById(elementid);
    const elementvauleText=element.innerText;
    const value=parseInt(elementvauleText);
    return value;

}
function settexElementValuebyId(elementid,value){
    const element=document.getElementById(elementid);
    element.innerText=value;
}

function getArandonAlphabet(){

    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');
    console.log(alphabets)

    const randomNnmber=Math.random()*25;
    const index=Math.round(randomNnmber);
    console.log(index);

    const alphabet=alphabets[index];
    console.log(alphabet);
    return alphabet;
}