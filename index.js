let a;
a= document.querySelector(".btn-primary"); //storing the button in a

a.addEventListener("click", function(event){
  let b;
  b= document.querySelector(".form-control").value;
  alert(b);
});
