//create the constructor LS2015 / CLASS
class User{

    constructor(email,password,first,last,age,address,phone,payment,color){

        this.email=email;
        this.password=password;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}


const registerUser = () => {

let email=$("#txtEmail").val();
let password=$("#txtPassword").val();
let first=$("#txtFirst").val();
let last=$("#txtLast").val();
let age=$("#txtAge").val();
let address=$("#txtAddress").val();
let phone=$("#txtPhone").val();
let payment=$("#selPayment").val();
let color=$("#txtColor").val();

let user=new User(email,password,first,last,age,address,phone,payment,color);

    if(isValid(user)){
        customAlert();
       saveUser(user);
       $("input.form-reset").val("");

    }else{
        console.log("not valid");
    }

    
}

const isValid = (user) => { 
    //return false when the user is not valid
    //return true if it is valid
    let valid=true;
//reset  the input to normal css
 $("input").removeClass("alert-error") 
    //validation
    if (user.email==""){
        //the email is empty
        valid=false;
        $("#txtEmail").addClass("alert-error");


    } if (user.fname==""){
        //the fist name is empty
       valid=false;
       $("#txtFirst").addClass("alert-error");

    } if (user.lname==""){
        //the last name is empty
         valid=false;
         $("#txtLast").addClass("alert-error");

    } if (user.age==""){
        //the age is empty
         valid=false;
       $("#txtAge").addClass("alert-error");

    } if (user.address==""){
        //the address is empty
         valid=false;
         $("#txtAddress").addClass("alert-error");

    } if (user.phone==""){
        //the phone is empty
        valid=false;
        $("#txtPhone").addClass("alert-error");

    }  if (user.password==""){
        //the phone is empty
        valid=false;
        $("#txtPassword").addClass("alert-error");

    } 

    return valid;

}

const init = () => { 
    console.log("init register");
    //hook events

    $("#btnRegister").click(registerUser);


}

const customAlert = () => { 

let alertmsg=`<div class="alert">
<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
User registered succesfully.
</div>`;

$("main").prepend(alertmsg);



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