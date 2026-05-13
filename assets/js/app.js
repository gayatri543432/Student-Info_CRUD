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
const stdForm=document.getElementById('stdForm');
const fnameControl=document.getElementById('fname');
const lnameControl=document.getElementById('lname');
const emailControl=document.getElementById('email');
const contactControl=document.getElementById('contact');
const addstdbtn=document.getElementById('addstdbtn');
const updatebtn=document.getElementById('updatebtn');



function templating(ele){
    let result='';
    ele.forEach((std,i)=>{
        result += `<tr id="${std.stdId}">
                                    <td>${i+1}</td>
                                    <td>${std.fname} ${std.lname}</td>
                                    <td>${std.email}</td>
                                    <td>${std.contact}</td>
                                    <td>
                                        <i class="fa-solid fa-pen-to-square fa-2x text-primary" onclick="onEdit(this)"></i>
                                    </td>
                                    <td>
                                        <i class="fa-solid fa-trash-can fa-2x text-danger " onclick="onStdRemove(this)"></i>
                                    </td>
                  </tr>`
    })
    formContainer.innerHTML=result;
}
templating(stdArr);

function onstdSubmit(eve){
    eve.preventDefault();
    let NEW_OBJ ={
        fname : fnameControl.value, 
        lname : lnameControl.value, 
        email : emailControl.value,
        contact :contactControl.value,
        stdId : Date.now().toString()
    }

    stdArr.push(NEW_OBJ);
    stdForm.reset();

    let tr=document.createElement('tr');
    tr.id =NEW_OBJ.stdId;
    tr.innerHTML=`                  <td>${stdArr.length}</td>
                                    <td>${NEW_OBJ.fname} ${NEW_OBJ.lname}</td>
                                    <td>${NEW_OBJ.email}</td>
                                    <td>${NEW_OBJ.contact}</td>
                                    <td>
                                        <i class="fa-solid fa-pen-to-square fa-2x text-primary" onclick="onEdit(this)"></i>
                                    </td>
                                    <td>
                                        <i class="fa-solid fa-trash-can fa-2x text-danger"  onclick="onStdRemove(this)"></i>
                                    </td>`
    formContainer.append(tr);
    
}
let EDIT_ID;
function onEdit(eve){
    EDIT_ID = eve.closest('tr').id;
    let EDIT_OBJ = stdArr.find(i=>i.stdId === EDIT_ID);

    fnameControl.value=EDIT_OBJ.fname;
    lnameControl.value=EDIT_OBJ.lname;
    emailControl.value=EDIT_OBJ.email;
    contactControl.value=EDIT_OBJ.contact;

   addstdbtn.classList.add('d-none')
   updatebtn.classList.remove('d-none')
   

}


function onUpdate(){
    UPDATE_ID =EDIT_ID;
    let UPDATE_OBJ={
        fname :fnameControl.value,
        lname :lnameControl.value,
        email :emailControl.value,
        contact :contactControl.value,
        stdId : UPDATE_ID
    }
    let getIndex = stdArr.findIndex(std=>std.stdId === UPDATE_ID);

    stdArr[getIndex]=UPDATE_OBJ;

    let tr=document.getElementById(UPDATE_ID).children
    tr[1].innerText=`${UPDATE_OBJ.fname} ${UPDATE_OBJ.lname}`
    tr[2].innerText=`${UPDATE_OBJ.email}`
    tr[3].innerText=`${UPDATE_OBJ.contact}`

   
   addstdbtn.classList.remove('d-none')
   updatebtn.classList.add('d-none')
}
function onStdRemove(ele){
    let REMOVE_ID = ele.closest('tr').id
    let getConfirm=confirm('Are you sure you want to remove the student?');
    if(getConfirm){
        let getIndex = stdArr.findIndex(std=>std.stdId === REMOVE_ID)
    

    let REMOVE_STD =stdArr.splice(getIndex,1)
    ele.closest('tr').remove()
    let alltrs=[...document.querySelectorAll('tr')]
    alltrs.forEach((tr,i)=>{
        tr.firstElementChild.innerText =i+1;
    })

    Swal.fire({
        title :'The student Removed Successfully',
        icon:'success',
        timer:3000
    })
}
}


stdForm.addEventListener('submit',onstdSubmit);
updatebtn.addEventListener('click',onUpdate)