//document.getElementById("id-name").innerText= "something you want to modify";
let count= 0;
let saveEL= document.getElementById("save-el");
let countEL= document.getElementById("count-peps"); //this function is asking hey js why don't you
// give me a element having id 'count-peps' 

function increment(){
    count += 1;
    countEL.textContent= count;
    //console.log(count);
    console.log("The button was clicked");
}

function  save(){
    counter= count + " - ";
     saveEL.textContent += counter;
    console.log(count);
    count=0;
    countEL.textContent=0;
}

let undoNum= document.getElementById("count-peps");
function decrement(){
    count = count  - 1;
    undoNum.textContent= count;
}

