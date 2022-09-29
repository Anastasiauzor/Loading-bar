const counterEl = document.querySelector(".counter");
const frontBarEl = document.querySelector(".loading-bar-front");

let idx = 0; //idx meaning index
updateNum();
function updateNum(){
  counterEl.innerText = idx + "%";
  frontBarEl.style.width =  idx + "%";
  idx++;
  if(idx <101){
    setTimeout(updateNum,20);
  }
}
