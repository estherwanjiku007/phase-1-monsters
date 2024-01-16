const theId=document.getElementById("monster-container")
//const myForm=document.querySelector("form") 
document.addEventListener("DOMContentLoaded",()=>myFunction(data))//=>{
    //const myDiv=document.getElementById("create-monster")
     //const myForm=document.createElement("form")
    //myDiv.appendChild(myForm)
//})
function myFunction(data){
const theId=document.getElementById("monster-container")
fetch ("http://localhost:3000/monsters")
.then(response=>response.json())
.then((data) =>{
    data.forEach( data => {
      let newId=document.createElement("div")
      const myName=document.createElement("h4")
      myName.textContent=data.name
      theId.appendChild(myName)
      const myDesc=document.createElement("h5")
      myDesc.textContent=data.description
      theId.appendChild(myDesc)
      const  myAge=document.createElement("p")
      myAge.textContent=data.age
     theId.appendChild(myAge)
     newId.appendChild(theId)
    const myForm=document.querySelector("form")
    myForm.addEventListener("submit",(e))
    e.preventDefault()
    
  addMonster(monsterObj)
}) 
})
}   
function addMonster(){
  //let allNames=document.getElementById("name") .textContent
 // let allAges=document.getElementById("age") .textContent
  //const allDesc=document.getElementById("description") .textContent
  const monsterObj={
    name :e.target.name.value, 
    age : e.target.age.value ,        
    description : e.target.description.value                  
  }
fetch("http://localhost:3000/monsters",{
   method :"POST",
   headers :{
    "Content-Type" : "application/json",
    "accept" : "application/json"
   },
   body :JSON.stringify(monsterObj)/*{
     name :e.target.name.value, //`${allNames}` ,
     age : e.target.age.value ,         //`${allAges}`,
     description : e.target.description.value                   //`${allDesc}`
   }*/
})
.then(res=>res.jon())
.then(data=>console.log(data))
}

