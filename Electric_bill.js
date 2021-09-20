//console.log()
const showResult = (ans)=>{
  if(ans === "TYPE"){
    document.querySelector(".bill-result").insertAdjacentHTML("beforebegin", `<p class="res-glow bg-danger">Please select an option</p>`);
    playSound("wrong");
    setTimeout(function(){
        document.querySelector(".res-glow").remove();
    },1300);
  }
  else if(ans === 0){
    document.querySelector(".bill-result").insertAdjacentHTML("beforebegin", `<p class="res-glow bg-info">100 units are free</p>`);
    playSound("yellow");
  }else{
    document.querySelector(".bill-result").insertAdjacentHTML("beforebegin", `<h3 class="res-glow">Pay RS:${ans}</h3>`);
    playSound("red");
  }
  setTimeout(function(){
      document.querySelector(".res-glow").remove();
  },3000);
}

document.querySelector(".bill-calculate").addEventListener("click",() => {
  let value=0;
value = document.querySelector("#select").value;
let unit =parseFloat(document.querySelector(".units").value).toFixed(2);
let ans = 0;
if(value === "TYPE"){
showResult("TYPE");
}
else if(unit == 100){
  //it's free
  showResult(0);
}
else if(value === "HOME"){
    ans = (unit-100)*1.5;
    showResult(ans);
    console.log(ans);
}
else if(value === "INDUSTRY"){
  ans = (unit-100)*2;
  console.log(ans);
  showResult(ans);
}else{
  ans = (unit-100)*1;
  showResult(ans);
  console.log(ans);
}
});
function playSound(name){
  let aud = new Audio("sounds/"+name+".mp3");
  aud.play();
}
