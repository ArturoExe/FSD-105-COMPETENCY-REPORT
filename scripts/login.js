const login = () => { 
   console.log("Executing login function...");
   //basic: get the values from the input

   let username = $("#txtUser").val();
   let password = $("#txtPassword").val();

   //medium: display the values in the console

   console.log(username, password);

   //high: compare the values with the email and password in the localstorage

   let users = readUser();

   console.log(users);
   let flag=false;

   for(let i = 0; i<users.length; i++){
       if(username===users[i].email && password === users[i].password){
           console.log("I found it!");
           flag = true;
           window.location="home.html";
       }
   }

   if(!flag){
       console.log("Invalid credentials");
       customAlert();
   }

   
 }

 const register = () => {

    location.href="register.html"

 }


 function init(){
   console.log("Login script");
   //hook events
   $("#btnLogin").click(login);
   $("#btnRegister").click(register);
}

//WARNING ALERT USER NOT FOUND
const customAlert = () => { 

   let alertmsg=`<div class="alert-warn">
   <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
   USER NOT FOUND
   </div>`;
   
   $("body").prepend(alertmsg);
   
   
   
   var close = document.getElementsByClassName("closebtn");
   var i;
   
   // Loop through all close buttons
   for (i = 0; i < close.length; i++) {
     // When someone clicks on a close button
     close[i].onclick = function(){
   
       // Get the parent of <span class="closebtn"> (<div class="alert">)
       var div = this.parentElement;
   
       // Set the opacity of div to 0 (transparent)
       div.style.opacity = "0";
   
       // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
       setTimeout(
           function(){ div.style.display = "none"; }, 600);
     }
   }
   }
   
window.onload=init;