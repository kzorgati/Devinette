/*
const btJouer=document.getElementById('jouer');
const formJouer=document.getElementById('jeu');
const nbS=document.getElementById('num');
*/
const nb=Math.floor(Math.random()*101)

const nbVie=10;
/*
const play=()=>{

    document.getElementById('jouer').addEventListener('click',(e)=>{
        alert('ok');
        let nbSaisie=parseInt(document.getElementById('num').value);
        
        alert(nbSaisie);
        if(nbSaisie>nb){
            alert('on cherche un entier plus petit ')
        }
        else{
            alert('on cherche un  entier plus grand')
        }

    })

}

play();
*/
function verif(){
    
    let nbSaisie=parseInt(document.getElementById('num').value);
    
    
    if(nbSaisie>nb){
        alert('on cherche un entier plus petit ')
    }
    else{
        alert('on cherche un  entier plus grand')
    }
}

