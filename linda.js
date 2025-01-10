//MENÜ
const hamburger=document.getElementById("hamburger")
const menü=document.getElementById("menü")

hamburger.onclick=function(){
    if(menü.classList.contains("show")){
        menü.classList.remove("show");
        menü.classList.add("hide");
        setTimeout(()=> {
            menü.style.display="none";
            menü.classList.remove("hide")
        }, 500);
    }else{
        menü.style.display="block"
        setTimeout(()=>{menü.classList.add("show");},10);
    }
};






//NAGYON
const nagyon=document.getElementById("nagyon")
const nagyongomb=document.getElementById("nagyongomb")
const nagyonbron=document.getElementById("nagyonbron")
const nagyonmordo=document.getElementById("nagyonmordo")
const nagyonmi=document.getElementById("nagyonmi")
const válasz=document.getElementById("válasz")

function resetAnimation(){
    válasz.style.animation="none";
    void válasz.offsetWidth;
    válasz.style.animation=""
}
nagyongomb.onclick=function(){
    nagyon.style.display="block";
    szeretlek.classList.add("rejt");
    téged.classList.add("rejt");
    szivecske.classList.add("rejt");
    válasz.classList.add("rejt");
    if(menü.style.display="block"){
        setTimeout(()=>{menü.classList.add("hide");},10);
    }
}

nagyonbron.onclick=function(){
    válasz.style.display="block";
    válasz.classList.remove("rossz","jo","hidden");
    válasz.textContent="Rossz válasz";   
    válasz.classList.add("rossz");
    void válasz.offsetWidth;
    válasz.style.animation="shake 1s moveDown 1s";
    válasz.scrollIntoView({behavior:"smooth"});
    resetAnimation(válasz);
}
nagyonmordo.onclick=function(){
    válasz.style.display="block";
    válasz.textContent="Rossz válasz";
    válasz.classList.remove("rossz","jo","hidden");
    válasz.classList.add("rossz");
    void válasz.offsetWidth;
    válasz.style.animation="shake 1s moveDown 1s";
    válasz.scrollIntoView({behavior:"smooth"});
    resetAnimation(válasz);

}
nagyonmi.onclick=function(){
    válasz.style.display="block";
    válasz.textContent="Helyes válasz";
    válasz.classList.remove("rossz","jo","hidden");
    válasz.classList.add("jo");
    void válasz.offsetWidth;
    válasz.style.animation="fadeIn 2s moveDown 1s";
    válasz.scrollIntoView({behavior:"smooth"});
    resetAnimation(válasz);
}







//SZERETLEK
const szeretlek=document.getElementById("szeretlek");
const szeretlekgomb=document.getElementById("szeretlekgomb");
const form=document.querySelector("form");
const név_input=document.getElementById("sz_nev")
const dátum_input=document.getElementById("sz_date");
const tel_input=document.getElementById("sz_tel");
const fiu_input=document.getElementById("sz_fiu");
const név_hiba=document.getElementById("sz_nev_hiba")
const date_hiba=document.getElementById("sz_date_hiba")
const tel_hiba=document.getElementById("sz_tel_hiba")
const fiu_hiba=document.getElementById("sz_fiu_hiba")
const ellenőrzés=document.getElementById("ellenőrzés")


szeretlekgomb.onclick=function(){
    nagyon.style.display="none"
    szivecske.classList.add("rejt")
    téged.classList.add("rejt")
    if(menü.style.display="block"){
        setTimeout(()=>{menü.classList.add("hide");},10);
    }
    if (szeretlek.classList.contains("rejt")){
        szeretlek.classList.remove("rejt");
        dátum_input.classList.add("rejt");
        tel_input.classList.add("rejt");
        fiu_input.classList.add("rejt");
        ellenőrzés.classList.add("rejt")
    }
}


function törlés(currentInputIndex){
    const bevitelek=[név_input,dátum_input,tel_input,fiu_input]
    const hiba_üzenetek=[név_hiba,date_hiba,tel_hiba,fiu_hiba]
    for(let i=currentInputIndex+1;i<bevitelek.length; i++){
        bevitelek[i].value="";
        bevitelek[i].classList.add("rejt");
        hiba_üzenetek[i].textContent=""
    }
    ellenőrzés.textContent=""
    ellenőrzés.classList.add("rejt")
}



név_input.onchange=function(){
    const név=név_input.value.trim();
    if (név.toLowerCase() === "bári linda"){
        dátum_input.classList.remove("rejt");
        név_hiba.classList.add("rejt");
    }else if (név==="") {
        név_hiba.classList.add("rejt");
        dátum_input.classList.add("rejt");
        törlés(0)
    } else{
        név_hiba.classList.remove("rejt");
        név_hiba.textContent="Helytelen";
        void név_hiba.offsetWidth;
        név_hiba.style.animation="shake 1s";
        dátum_input.classList.add("rejt");
        törlés(0)
    }
}

dátum_input.onchange=function(){
    const dátum=dátum_input.value.trim();
    if (dátum==="02/28/2008"){
        tel_input.classList.remove("rejt")
        date_hiba.classList.add("rejt")
    }else if (dátum===""){
        date_hiba.classList.add("rejt");
        tel_input.classList.add("rejt");
        törlés(1)
    }else{
        date_hiba.classList.remove("rejt")
        date_hiba.textContent="Helytelen";
        void date_hiba.offsetWidth;
        date_hiba.style.animation="shake 1s";
        tel_input.classList.add("rejt");
        törlés(1)
    }
}

tel_input.onchange=function(){
    const tel=tel_input.value.trim();
    if (tel==="+36205232233"){
        fiu_input.classList.remove("rejt")
        tel_hiba.classList.add("rejt")
    }else if (tel===""){
        tel_hiba.classList.add("rejt");
        fiu_input.classList.add("rejt");
        törlés(2)
    }else{
        tel_hiba.classList.remove("rejt")
        tel_hiba.textContent="Helytelen";
        void tel_hiba.offsetWidth;
        tel_hiba.style.animation="shake 1s";
        fiu_input.classList.add("rejt");
        törlés(2)
    }
}

fiu_input.onchange=function(){
    const fiu=fiu_input.value.trim();
    const nevek=["Dani", "dani", "Dániel", "dániel"]
    if (nevek.includes(fiu)){
        ellenőrzés.textContent="Rendben, csak ellenőriztem hogy tényleg a hercegnőm vagy-e.";
        ellenőrzés.classList.remove("rejt")
    }else{
        fiu_hiba.textContent="Helytelen";
        void fiu_hiba.offsetWidth;
        fiu_hiba.style.animation="shake 1s";
        törlés(3)
    }
}


 

//TÉGED
const téged=document.getElementById("téged")
const tégedgomb=document.getElementById("tégedgomb")
const mentsd=document.getElementById("mentsd")
const maze=document.getElementById("maze")
const cells=Array.from(maze.children)
let playerIndex=cells.findIndex(cell=>cell.classList.contains("player"))
const goalIndexes=cells.map((cell,index)=> (cell.classList.contains("goal") ? index:null)).filter(index=>index!==null)


tégedgomb.onclick=function(){
    nagyon.style.display="none"
    szeretlek.classList.add("rejt")
    szivecske.classList.add("rejt")
    téged.classList.remove("rejt")
    if(menü.style.display="block"){
        setTimeout(()=>{menü.classList.add("hide");},10);
    }
}


document.addEventListener("keydown", (e)=>{
    const rowLength=20;
    let nextIndex=playerIndex;
    if (e.key==="ArrowUp" && playerIndex>=rowLength){
        nextIndex-=rowLength;
    }else if(e.key==="ArrowDown" && playerIndex<cells.length - rowLength){
        nextIndex+=rowLength
    }else if(e.key==="ArrowLeft" && playerIndex%rowLength!==0){
        nextIndex-=1;
    }else if(e.key==="ArrowRight" && (playerIndex+1)%rowLength!==0){
        nextIndex+=1
    }
    if (!cells[nextIndex].classList.contains("wall")){
        cells[playerIndex].classList.remove("player");
        playerIndex=nextIndex;
        cells[playerIndex].classList.add("player")
        if(goalIndexes.includes(playerIndex)){
            mentsd.textContent="Gratulálok, megmentetted a hercegnőt.  Most megkérheted a kezét.";
            mentsd.classList.add("grat")
            mentsd.classList.remove("mentsd")
        }else{
            mentsd.textContent="Mentsd meg a hercegnőt!!";
            mentsd.classList.remove("grat")
            mentsd.classList.add("mentsd")
        }
    }
})




//SZIVECSKE
const szivecske=document.getElementById("szivecske")
const szivecskegomb=document.getElementById("szivecskegomb")


szivecskegomb.onclick=function(){
    nagyon.style.display="none"
    szeretlek.classList.add("rejt");
    téged.classList.add("rejt")
    if(menü.style.display="block"){
        setTimeout(()=>{menü.classList.add("hide");},10);
    }
    if(szivecske.classList.contains("rejt")){
        szivecske.classList.remove("rejt")
    }
}
