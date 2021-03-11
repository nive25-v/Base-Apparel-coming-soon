let alertText = document.querySelector('#alert-text');
let alertIcon = document.querySelector('#icon-err');
let inputT = document.querySelector('#text-g');
let btn = document.querySelector('.btn');

const clear = () => {
    if(inputT.value == "insert an email adress"){
        inputT.value == ''
    }
}

function emailIsValid (email) {
    email = inputT.value;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  

const validate = (inputT) =>{
    if(emailIsValid(inputT) == true)
    {
    alert("Valid email address!");
    alertIcon.style.visibility="hidden"
    alertText.style.visibility="hidden"
    return true;
    }
    else
    {
        alertIcon.style.visibility="visible"
        alertText.style.visibility="visible"
    return false;
    }
}
console.log()
inputT.addEventListener("click",clear);
btn.addEventListener("click", validate)
