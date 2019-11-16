 var a,b,c,d,e,f,i,n,r,s,t,aray=[],may=[],ray=[],say=[];
 b01=document.getElementById("bo1");
 bo2=document.getElementById("bo2");
 bo3=document.getElementById("bo3");
 bo4=document.getElementById("bo4");
 
 bu1.addEventListener("click",fun1);
 bu2.addEventListener("click",fun2);
 bu3.addEventListener("click",fun3);
 bu4.addEventListener("click",fun4);



 function fun1() {
    for(i=0;i<10;i++) {
    var rand=Math.floor(Math.random()*100);
      aray.push(rand);
   if(rand%2==0) {
    may.push(rand);
   }
   else {
      ray.push(rand);
   }
   }
      bo1.innerHTML=aray;
}
   function fun2() {
      bo4.innerHTML=may;

   }
   function fun3() {
      bo5.innerHTML=ray;
   }
   function fun4() {
      bo1.innerHTML="";
      bo2.innerHTML="";
      bo4.innerHTML="";
      bo5.innerHTML="";
   }