

//flvaor ja flavorFin js-------------------------------------------------------------------------------------------------------------------------------------


var modal1 = document.getElementById("mymodal1");
var modal2 = document.getElementById("mymodal2");
var modal3 = document.getElementById("mymodal3");
var modal4 = document.getElementById("mymodal4");
var modal5 = document.getElementById("mymodal5");
var modal6 = document.getElementById("mymodal6");

//popup------------------------------------------------------
var pop1 = document.getElementById("pop1");
var pop2 = document.getElementById("pop2");
var pop3 = document.getElementById("pop3");
var pop4 = document.getElementById("pop4");
var pop5 = document.getElementById("pop5");
var pop6 = document.getElementById("pop6");

//sulku--------------------------------------------------------
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];



// eka ikkuna-----------------------------------------------------------------------------------------
pop1.onclick = function(){
  modal1.style.display = "block";
  console.log("toimii");
};

span1.onclick = function(){
  modal1.style.display ="none";
};

window.addEventListener("click",function(event){
  if (event.target === modal1){
    modal1.style.display ="none";
  }
});

// toka ikkuna-----------------------------------------------------------------------------------------
pop2.onclick = function(){
  modal2.style.display = "block";
  console.log("toimii");
};

span2.onclick = function(){
  modal2.style.display ="none";
};

window.addEventListener("click",function(event){
  if (event.target === modal2){
    modal2.style.display ="none";
  }
});

// kolmas ikkuna-----------------------------------------------------------------------------------------
pop3.onclick = function(){
  modal3.style.display = "block";
  console.log("toimii");
};

span3.onclick = function(){
  modal3.style.display ="none";
};

window.addEventListener("click",function(event){
  if (event.target === modal3){
    modal3.style.display ="none";
  }
});

// neljäs ikkuna-----------------------------------------------------------------------------------------
pop4.onclick = function(){
  modal4.style.display = "block";
  console.log("toimii");
};

span4.onclick = function(){
  modal4.style.display ="none";
};

window.addEventListener("click",function(event){
  if (event.target === modal4){
    modal4.style.display ="none";
  }
});

// viides ikkuna-----------------------------------------------------------------------------------------
pop5.onclick = function(){
  modal5.style.display = "block";
  console.log("toimii");
};

span5.onclick = function(){
  modal5.style.display ="none";
};

window.addEventListener("click",function(event){
  if (event.target === modal5){
    modal5.style.display ="none";
  }
});

// kuudes ikkuna-----------------------------------------------------------------------------------------
pop6.onclick = function(){
  modal6.style.display = "block";
  console.log("toimii");
};

span6.onclick = function(){
  modal6.style.display ="none";
};

window.addEventListener("click",function(event){
  if (event.target === modal6){
    modal6.style.display ="none";
  }
});
//flvaor ja flavorFin js-------------------------------------------------------------------------------------------------------------------------------------
