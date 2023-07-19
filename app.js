let subscribeButton=document.getElementById('button');
let emailInput=document.getElementById('email');
let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

subscribeButton.addEventListener('click',isValid);
function isValid(){
    const email=emailInput.parentElement;
    const errorMessage=email.querySelector('small');
    if(!emailInput.value.match(pattern)){
       emailInput.style.borderColor="red";
       errorMessage.style.visibility="visible";
    }
    else{
        emailInput.style.borderColor=" ";
       errorMessage.style.visibility="hidden";
    }
}