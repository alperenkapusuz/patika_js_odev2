const ulDOM = document.querySelector('#list')
const textDOM = document.querySelector('#task')

let listArr = localStorage.getItem("Items")?JSON.parse(localStorage.getItem("Items")):[]
showItem()

function showItem(){
    if(localStorage.getItem("Items")){
        listArr.forEach((element,index) => {
            addItem(element,index)
        });
    }
}

function addItem(element,index){
    let liDOM = document.createElement("li")
    let textLiDOM = document.createTextNode(element)
    let iconDOM = document.createElement("i")
    iconDOM.classList.add("bi","bi-x-lg","close")
    iconDOM.addEventListener("click",function(){sutDown(index,iconDOM)})
    liDOM.addEventListener("click",taskOk)
    liDOM.append(textLiDOM)
    liDOM.append(iconDOM)
    ulDOM.prepend(liDOM)
}
function newElement(){
    if(textDOM.value.trim('').length != 0)
    {   
        listArr.push(textDOM.value)
        localStorage.setItem("Items",JSON.stringify(listArr))
        $('#addToast').toast('show')
        addItem(textDOM.value,listArr.length-1)        
    }else{
        $('#errorToast').toast('show') 
    }
    textDOM.value=""  
}
function sutDown(index,d){
    listArr.splice(index, 1)
    localStorage.setItem("Items",JSON.stringify(listArr))
    d.parentElement.remove()
    $('#removeToast').toast('show')
}
function taskOk(){    
    this.classList.toggle("bg-success")
    this.style.textDecoration=(this.style.textDecoration=="line-through")?"none":"line-through"
}