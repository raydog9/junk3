  var a,b,c,d,e,m,n,o,arry=[], may=[],ray=[], say=[];
  bo1=document.getElementById("bo1");
  bo2=document.getElementById("bo2");
  bo3=document.getElementById("bo3");
  bo4=document.getElementById("bo4");
  bo5=document.getElementById("bo5");
  bo6=document.getElementById("bo6");
  bo7=document.getElementById("bo7");
  bo8=document.getElementById("bo8");

  bo1.addEventListener("click",fun1);
  bo5.addEventListener("click",fun2);


  add=0;
    function fun1() {
      add++;
    rand={
      ran1:Math.floor(Math.random() * 20),
      ran2:Math.floor(Math.random() * 20)+20,
      ran3:Math.floor(Math.random() * 10),
      ran4:Math.floor(Math.random() * 10)
    };
    arry.push(rand.ran1);
    may.push(rand.ran2);
    ray.push(rand.ran3);
    say.push(rand.ran4);

    bo1.innerHTML=rand.ran1;
    bo2.innerHTML=rand.ran2;
    bo3.innerHTML=rand.ran3;
    bo4.innerHTML=rand.ran4;

  }
    function fun2() {
      bo5.innerHTML=arry;
      bo6.innerHTML=may;
      bo7.innerHTML=add;
     }