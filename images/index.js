const Add = document.getElementById('add')
const Button = document.getElementById('btn')
const list_container = document.getElementById('list_container')


Button.onclick=()=>{
    if(Add.value === ''){
        alert('none')
    }
    else{
       let li = document.createElement('li')
       li.innerHTML = Add.value
       list_container.appendChild(li)

       let span = document.createElement('span')
       span.innerHTML = "\u00d7"
       li.appendChild(span)

    }
    Add.value = ''
    saveData()
}


list_container.addEventListener('click',function(e){
    console.log('clicked')
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('class')
        saveData()
    
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()

    }
},false )

function saveData(){
    localStorage.setItem("data", list_container.innerHTML)
}

function showTask(){
   list_container.innerHTML =  localStorage.getItem('data')
}

showTask();
