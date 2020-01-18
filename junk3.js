 var a,b,c,d,e,m,n,r,s,t,arry=[],may=[],ray=[],say=[];
 bo1=document.getElementById("bo1");
 bo2=document.getElementById("bo2");
 bo3=document.getElementById("bo3");
 bo4=document.getElementById("bo4");

 bo1.addEventListener("click",fun1);
 bo5.addEventListener("click",fun2);

 function fun1() {
    

  rand= {
    ran1:Math.floor(Math.random() *20),
    ran2:Math.floor(Math.random() *20)+20,
    ran3:Math.floor(Math.random() *20)+40,
    ran4:Math.floor(Math.random() *20)+60
  };
    arry.push(rand.ran1);
    ray.push(rand.ran2);
    may.push(rand.ran3);
    say.push(rand.ran4);

    bo1.innerHTML=rand.ran1;
    bo2.innerHTML=rand.ran2;
    bo3.innerHTML=rand.ran3;
    bo4.innerHTML=rand.ran4;
  


 }
 function fun2() {
  bo5.innerHTML=arry.join(" ");
  bo6.innerHTML=ray.join(" ");
  bo7.innerHTML=may.join( " ");
  bo8.innerHTML=say.join(" ");

 }
