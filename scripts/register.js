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
       saveUser(user);
    }else{
        console.log("not valid");
    }

    $("input.form-reset").val("");

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

window.onload=init;