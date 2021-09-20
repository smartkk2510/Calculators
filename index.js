//******CGPA*******
const showResult = (cgpa)=>{
  if(cgpa === 0){
    document.querySelector(".cgpa-result").insertAdjacentHTML("beforebegin", `<p class="res-glow bg-dark">Please enter your GPA</p>`);
   playSound("wrong");
  }else{
    document.querySelector(".cgpa-result").insertAdjacentHTML("beforebegin", `<h3 class="res-glow">CGPA :${cgpa}</h3>`);
    playSound("yellow");
  }
 setTimeout(function(){
     document.querySelector(".res-glow").remove()
 },3000)
}
 const calculateCGPA = ()=>{

   let count=0,sum=0,cgpa=0;
   for(let i=1;i<=8;i++){
     if(document.querySelector(".gpa"+i+"").value != 0){
       count++;
        sum += parseFloat(document.querySelector(".gpa"+i+"").value);
     }
   }
 cgpa = sum / count;
 if(sum == 0 && count == 0){
  showResult(0);
 }
 else{
     showResult(cgpa.toFixed(2));
 }
 }
document.querySelector(".cgpa-calculate").addEventListener("click",calculateCGPA);
function playSound(name){
  let aud = new Audio("sounds/"+name+".mp3");
  aud.play();
}

//***********************************************************************************************
//*****calculator*******
