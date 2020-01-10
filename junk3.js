 var a,b,c,d,e,m,n,o,arry=[],may=[],ray=[],say=[];

 bo1=document.getElementById("bo1");
 bo2=document.getElementById("bo2");

 bu1.addEventListener("click",fun1);
 
 function fun1() {
        rand={
          ran1:Math.floor(Math.random() * 10),
          ran2:Math.floor(Math.random() * 10),
          ran3:Math.floor(Math.random() * 10),
          ran4:Math.floor(Math.random() *10)

      };
      arry.push(rand.ran1, rand.ran2,rand.ran3,rand.ran4);
      bo1.innerHTML=rand.ran1;
      bo2.innerHTML=rand.ran2;
      bo3.innerHTML=rand.ran3;
      bo4.innerHTML=rand.ran4;
      bo5.innerHTML=arry;
   }
   bu2.onclick=function() {
      bo7.innerHTML=arry;
   }
