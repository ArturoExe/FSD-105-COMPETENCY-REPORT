const saveUser = (user) => {
    console.log(user);//display the object
    let val=JSON.stringify(user);//parse into  JASON file
    console.log(val);//diplay the object parsed into a string
    localStorage.setItem("users",val);//send it to local storage

 }

 const readUser = () => { 

  }