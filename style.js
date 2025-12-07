const addToCartForm=document.getElementById("addToCartForm");
window.OpenObj=function(){
    if(!addToCartForm) return;
    addToCartForm.classList.remove("hidden");
    addToCartForm.classList.add("flex");
};
window.CloseOBj=function(){
    if(!addToCartForm) return;
    addToCartForm.classList.add("hidden");
};
const price=document.getElementById("price");
const qt=document.getElementById("qt");
const total=document.getElementById("total");
const process=document.getElementById("process");
function sum(){
    let a=Number(price.value);
    let b=Number(qt.value)
    const result=a*b;
    if(total){
        total.value=result;
    }
};
process.addEventListener('onmouseover',sum());
const list=document.getElementById('list');
const ListItem=["Home","blog","Features","About us","Contact Us","More"];
let List="";
for(let i=0;i<ListItem.length;i++){
    List[i]=ListItem[i] +" "+ " <br>";
}
list.addEventListener("onclick",List);