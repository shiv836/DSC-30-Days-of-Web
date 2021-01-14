



function seterror(id,error)
{
element=document.getElementById(id);
if(id==="name")
{
let newHtml="<span>* <b>The name is too short</b></span>"
element.innerHTML+=newHtml;
document.forms['myForm']["fname"].classList.add("input_w");
}
if(id==="number")
{
    let newHtml="<span>* <b>invalid number</b></span>"
    element.innerHTML+=newHtml;   
    document.forms['myForm']["number"].classList.add("input_w");
}

}
function validateForm()
{
    let returnval=true;
    let name=document.forms['myForm']["fname"].value;
    let age=document.forms['myForm']["age"].value;
    let number=document.forms['myForm']["number"].value;
    let mail=document.forms['myForm']["email"].value;
    if(name.length<3)
    {
        seterror("name","Length of name is too short");
        returnval=false;
    }
    if(number.length!=10)
    {
        seterror("number","not a valid number");
        returnval=false; 
    }
    if(returnval===true)
    {
    let namedetail= document.getElementById("dname");
    namedetail.classList.add("done");
    document.forms['myForm']["fname"].classList.add("input_d");
    namedetail.innerText=name;
    let agedetail= document.getElementById("dage");
    agedetail.classList.add("done");
    document.forms['myForm']["age"].classList.add("input_d");
    agedetail.innerText=age;
    let numberdetail= document.getElementById("dnumber");
    numberdetail.classList.add("done");
    document.forms['myForm']["number"].classList.add("input_d");
    numberdetail.innerText=number;
    let maildetail= document.getElementById("demail");
    maildetail.classList.add("done");
    document.forms['myForm']["email"].classList.add("input_d");
    maildetail.innerText=mail;
    }
    window.alert("successful submission! view your details below contact me section");
    return false;
}

