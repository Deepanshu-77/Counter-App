const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const resetbtn = document.querySelector(".reset");
// const sub = document.querySelector(".sub");
const buttons = document.querySelector(".buttons")


buttons.addEventListener( "click" , (event)=>{
    if(event.target.classList.contains("add")){
        count.innerHTML++;
        setcolor();
    }
    if(event.target.classList.contains("sub")){
        count.innerHTML--;
        setcolor();
    }
    if(event.target.classList.contains("reset")){
        count.innerHTML = 0 ;
        setcolor();
    }
})

function setcolor(){
    if(count.innerHTML > 0 ){
        count.style.color = "#9F2B68";
    }
    else if(count.innerHTML < 0 ){
        count.style.color = "#301934";
    }
    else{
        count.style.color = "white";
    }
}


// add.addEventListener( "click" , () => {
//     count.innerHTML++;
// });
// sub.addEventListener( "click" , () => {
//     count.innerHTML--;
// });
// resetbtn.addEventListener( "click" , () => {
//     count.innerHTML = 0;
// });