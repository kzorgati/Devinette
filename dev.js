const formJouer=document.getElementById('jeu');
const nbS=document.getElementById('num');
const msg=document.getElementById('message');

const c1=document.querySelector('.formulaire');

const btr=document.getElementById('rejouer');
const btj=document.getElementById('jouer');
const vie=document.getElementById('vies');

const cp='<ion-icon name="heart"></ion-icon>';
const cv='<ion-icon name="heart-outline"></ion-icon>';


const play=()=>{
    let nbVie=10;
    alert ('hello');
    const nb=Math.floor(Math.random()*101)
    alert(nb)
    formJouer.addEventListener('submit',(e)=>{
        
        e.preventDefault();
        
        let nbSaisie=parseInt(nbS.value)

        if (nbSaisie==nb){
            msg.textContent=`Bravo!!!! c'est bien le nombre ${nbSaisie}qu'on cherche`;
            c1.style.background='rgb(102, 233, 152)';
            btr.style.display="block";
            btj.setAttribute("disabled","")
        }

    else{
        if (nbSaisie>nb){
            msg.textContent=`On cherche un entier plus plus petit`;          

        }
        else{
            msg.textContent=`On cherche un entier plus plus grand`;
        }
        perdu();
        nbVie--;
        viet();
    }
    })

    const perdu=()=>{
        if (nbVie==0){
            msg.textContent=`Tu as perdu :( On cherche le nombre ${nb}`;
            c1.style.background='rgba(236, 88, 30, 0.651)';
            btr.style.display="block";
            btj.setAttribute("disabled","")

        }
    }

    const viet=()=>{
        vie.innerHTML="";
        let tabVie=[];
        for(let i=0;i<nbVie;i++){
            tabVie.push(cp);
        }
        for (let i=0;i<10-nbVie;i++){
            tabVie.push(cv);
        }

        tabVie.forEach(c=>{
            vie.innerHTML+=c;
        })

    }

}

play();