

// customers = {
// firstName: "Brian",
// email:"paddyraff@gmail.com",
// phone:"07921472364"

// }

// console.log(customers);

// document.body.style.backgroundColor = "red"

// const custy = Object.values(customers)
// console.log(custy);

// const custyKeys = Object.keys(customers)
// console.log(custyKeys);

// const custyEnt = Object.entries(customers)
// // console.log(custyEnt);

// for (const [head,value] of custyEnt){
//     console.log(`the first is ${head} and second is ${value}`);
// }


// chnage colours in background with randon number for HEX //
//********************************************************//
document.body.style.backgroundColor = "#2312ff"

const hex = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"]
let btnText =  document.getElementById('colBtn').textContent
// hexRan = Math.floor(Math.random()*hex.length)

let btn = document.getElementById("colBtn")

btn.addEventListener("click", function(){
   let  hexCol1 = "#"
   for (let i = 0; i < 6; i++) {
       hexCol1 += hex[hexRan()];
      
       
   } 
   document.getElementById('colBtn').textContent = (`Your Hex Colour is  ${ hexCol1}` )
   document.body.style.backgroundColor = hexCol1
   btn.style.color = hexCol1


  function hexRan(){

    return Math.floor(Math.random()*hex.length)
  }
    
    

})
//******************************************************************//




// test= hex.length

// console.log(test)
