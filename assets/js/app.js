const cl=console.log;

let stdArr = [
    {
        fname:"jhon",
        lname:"doe",
        email:"jhon@gmail.com",
        contact :8677995544,
        stdId :"fs33452-gft6676-988"
    },
    {
        fname:"may",
        lname:"doe",
        email:"may@gmail.com",
        contact :9973636527,
        stdId :'fgh3452-gft6676-988'
    },
    {
        fname:"rohit",
        lname:"shrma",
        email:"rohit@gmail.com",
        contact :7699768976,
        stdId :'fs33452-gft6676-124'
    }
]

const formContainer=document.getElementById('formContainer');

function templating(ele){
    let result='';
    ele.forEach((std,i)=>{
        result += `<tr>
                                    <td>${i+1}</td>
                                    <td>${std.fname} ${std.lname}</td>
                                    <td>${std.email}</td>
                                    <td>${std.contact}</td>
                                    <td>
                                        <i class="fa-solid fa-pen-to-square fa-2x text-primary"></i>
                                    </td>
                                    <td>
                                        <i class="fa-solid fa-trash-can fa-2x text-danger"></i>
                                    </td>
                  </tr>`
    })
    formContainer.innerHTML=result;
}
templating(stdArr);

