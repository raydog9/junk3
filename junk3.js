 var a,b,c,d,e,m,n,o,arry=[],may=[],ray=[],say=[];
 bo1=document.getElementById("bo1");
 bo2=document.getElementById("bo2");
 bo3=document.getElementById("bo3");
 bo4=document.getElementById("bo4");

 bo1.addEventListener("click",fun1);

 function fun1() {
    for (i=0;i<100;i++) {
      arry.push(i);
       if(i%3==0) {
         may.push(i);
      }
       if(i%9==0) {
         ray.push(i);
       }

   }
   bo1.innerHTML=may.join(" ");
   bo2.innerHTML=ray.join(" ");
 }