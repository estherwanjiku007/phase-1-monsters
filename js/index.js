document.addEventListener("DOMContentLoaded",myFunction)//=>{
    const myDiv=document.getElementById("create-monster")
    //myDiv.appendChild(myForm)
//})
function myFunction(){
const theMonterContainer=document.getElementById("monster-container")
fetch ("http://localhost:3000/monsters")
.then(response=>response.json())
.then((data)=>
    data.forEach( data => {
      let newDiv=document.createElement("div")
      const myName=document.createElement("h4")
      myName.textContent=data.name
      newDiv.appendChild(myName)
      const myDesc=document.createElement("h5")
      myDesc.textContent=data.description
      newDiv.appendChild(myDesc)
      const  myAge=document.createElement("p")
      myAge.textContent=data.age
     newDiv.appendChild(myAge)
     theMonterContainer.appendChild(newDiv)
    const myForm=document.getElementById("myForm")
    myForm.addEventListener("submit",()=>{
      const allNames=document.getElementById("name") .value
     const allAges=document.getElementById("age") .value
      const allDesc=document.getElementById("description") .value
    addMonster(allNames,allAges,allDesc)
    })
    //const theButton=document.getElementById("create monster")
    //theButton.addEventListener("click",addMonster)
    }) 
)
}   
function addMonster(name,age,description){
 /* let allNames=document.getElementById("name") .textContent
 let allAges=document.getElementById("age") .textContent
  const allDesc=document.getElementById("description") .textContent*/
  const monsterObj={
    "name" :name, 
    "age" : age,        
    "description" : description                  
  }
fetch("http://localhost:3000/monsters",{
   method :"POST",
   headers :{
    "Content-Type" : "application/json",
    "accept" : "application/json"
   },
   body :JSON.stringify(monsterObj)
  })
}/*
})
.then(res=>res.jon())
.then(data=>console.log(data))
}*/
