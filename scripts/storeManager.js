const LS_KEY="users";

const saveUser = (user) => {
    //Load the old data from the local storage
    let oldData=readUser();
    
    //merge the data
    oldData.push(user);

    //parse into  JASON file
    let val=JSON.stringify(oldData);

    //send it to local storage
    localStorage.setItem(LS_KEY,val);

 }

 const readUser = () => { 
     //get the values from the local storage
    let data=localStorage.getItem(LS_KEY);

    if(!data){

        return [];//create the array .

    }else{
        let list=JSON.parse(data);
        return list;
    }


    //create the array the first registration

    //parse string back into obj
    console.log(user)
  }