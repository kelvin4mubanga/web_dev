
let circularprogress = document.querySelector(".circular-progress");
let progressvalue = document.querySelector(".progress-value");

let circularprogressjs = document.querySelector(".circularjs");
let progressvaluejs = document.querySelector(".valuejs");

let circularprogresspy= document.querySelector(".circularpython");
let progressvaluepy = document.querySelector(".valuepython");

let circularprogressphp= document.querySelector(".circularphp");
let progressvaluephp = document.querySelector(".valuephp");

let circularprogressc= document.querySelector(".circularc");
let progressvaluec = document.querySelector(".valuec");

let circularprogressjar= document.querySelector(".circularjar");
let progressvaluejar = document.querySelector(".valuejar");

let circularprogressgit= document.querySelector(".circulargit");
let progressvaluegit= document.querySelector(".valuegit");



//HTML &CSS progress
let progressStartvalue = 10;
let progressendvalue = 90;
let speed = 10;
let progress = setInterval(()=>{
  progressStartvalue++;
  progressvalue.textContent = `${progressStartvalue}%`;
  circularprogress.style.background=`conic-gradient(#7b2ae8 ${progressStartvalue * 3.6}deg,#ededed 0deg)`   
  if(progressStartvalue == progressendvalue ){
    clearInterval(progress);
  };
},speed);
//JavaScript progress
let progressStartvaluejs = 10;
let progressendvaluejs = 70;
let progressjs = setInterval(()=>{
  progressStartvaluejs++;
  progressvaluejs.textContent = `${progressStartvaluejs}%`;
 
  circularprogressjs.style.background=`conic-gradient(#7b2ae8 ${progressStartvaluejs * 3.6}deg,#ededed 0deg)` 
 
  if(progressStartvaluejs == progressendvaluejs ){
    clearInterval(progressjs);
  };
},speed);
//python progress
let progressStartvaluepy = 10;
let progressendvaluepy = 50;
let progresspy = setInterval(()=>{
  progressStartvaluepy++;
  progressvaluepy.textContent = `${progressStartvaluepy}%`;
 
  circularprogresspy.style.background=`conic-gradient(#7b2ae8 ${progressStartvaluepy * 3.6}deg,#ededed 0deg)` 
 
  if(progressStartvaluepy == progressendvaluepy){
    clearInterval(progresspy);
  };
},speed);
//PHP progress

let progressStartvaluephp = 10;
let progressendvaluephp = 40;
let progressphp = setInterval(()=>{
  progressStartvaluephp++;
  progressvaluephp.textContent = `${progressStartvaluephp}%`;
 
  circularprogressphp.style.background=`conic-gradient(#7b2ae8 ${progressStartvaluephp * 3.6}deg,#ededed 0deg)` 
 
  if(progressStartvaluephp == progressendvaluephp){
    clearInterval(progressphp);
  };
},speed);

//C++ progress
let progressStartvaluec = 10;
let progressendvaluec = 20;
let progressc = setInterval(()=>{
  progressStartvaluec++;
  progressvaluec.textContent = `${progressStartvaluec}%`;
 
  circularprogressc.style.background=`conic-gradient(#7b2ae8 ${progressStartvaluec * 3.6}deg,#ededed 0deg)` 
 
  if(progressStartvaluec == progressendvaluec){
    clearInterval(progressc);
  };
},speed);
//progress Java
let progressStartvaluejar = 10;
let progressendvaluejar = 20;
let progressjar = setInterval(()=>{
  progressStartvaluejar++;
  progressvaluejar.textContent = `${progressStartvaluejar}%`;
 
  circularprogressjar.style.background=`conic-gradient(#7b2ae8 ${progressStartvaluejar * 3.6}deg,#ededed 0deg)` 
 
  if(progressStartvaluejar == progressendvaluejar){
    clearInterval(progressjar);
  };
},speed);

//progressGit

let progressStartvaluegit = 0;
let progressendvaluegit = 10;
let progressgit = setInterval(()=>{
  progressStartvaluegit++;
  progressvaluegit.textContent = `${progressStartvaluegit}%`;
 
  circularprogressgit.style.background=`conic-gradient(#7b2ae8 ${progressStartvaluegit * 3.6}deg,#ededed 0deg)` 
 
  if(progressStartvaluegit == progressendvaluegit){
    clearInterval(progressgit);
  };
},speed);
