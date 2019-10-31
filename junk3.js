 var a,b,c,d,e,f,i,n,r,s,t,aray=[],may=[],ray=[],say=[];

 
 bu1.addEventListener("click",fun1);
 bu2.addEventListener("click",fun2);
 bu3.addEventListener("click",fun3);


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
      document.getElementById("bo1").innerHTML=aray;
}
   function fun2() {
      document.getElementById("bo4").innerHTML=may;

   }
   function fun3() {
      document.getElementById("bo5").innerHTML=ray
   }