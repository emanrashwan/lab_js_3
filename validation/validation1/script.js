
// function myFunction() {

//   let x ={ userName:"",password:""};
//   x.userName=document.getElementById("username").value;
//   x.password=document.getElementById("password").value;
//   if (x.userName=="admin"&& x.password==123)
//       {document.write("welcome");}
//   else
//   { document.write("not registered");}
//   }


document.getElementById("reg").onsubmit = function(){
  let Name=document.getElementById("username").value;
  let passwor=document.getElementById("password").value;
  let usernamereg =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let passreg= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  let validationresalt=usernamereg.test(Name);
  let validationresaltpass=passreg.test(passwor);

 if(validationresalt==false ||validationresaltpass==false )
   { if(validationresalt==false){
  document.getElementById("demo1").innerHTML = "not valied email ";
  return false;} 
  if(validationresaltpass==false){
  document.getElementById("demo2").innerHTML = "not valied password";
  return false;
 }
}
 else{
  return true;
 }
}