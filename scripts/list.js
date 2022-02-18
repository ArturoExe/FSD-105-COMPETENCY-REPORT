const createRow = (userArray) => { 
for(let i=0;i<userArray.length;i++){

    let user=userArray[i]
    let tmp=`
    
    <tr>
        <td>${user.email}</td>
        <td class="password-text">${user.password}</td>
        <td>${user.fname}</td>
        <td>${user.lname}</td>
        <td>${user.age}</td>
        <td>${user.address}</td>
        <td>${user.phone}</td>
        <td>${user.payment}</td>
        <td>${user.color}</td>

    </tr>
    
    `;//Creating the template

    $("#userList").append(tmp);
    }

}

const init = () => { 

    console.log("Listing");
    let users=readUser();
    createRow(users);
}

window.onload=init;