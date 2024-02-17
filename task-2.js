const inputBox=document.querySelector("#inputbox");
const listcontainer=document.querySelector("#list-contanier");

function  add(){
    if(inputBox.value ==''){
        alert("Please Enter some task ");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=`${inputBox.value}<i class="fa-solid fa-trash"></i>`;
        listcontainer.appendChild(li);
        inputBox.value ='';
        li.querySelector("i").addEventListener("click",remove);
        function remove(){
            li.remove()
        }
    }
     
}

