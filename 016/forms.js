function addError(text){
    const ul =document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML=text;
    ul.appendChild(li)
}

document.querySelector('form').addEventListener('submit', (e)=>{
   e.preventDefault();
   document.querySelector('ul').innerHTML="";
   const inputElements= e.target.elements;
   const firstName = inputElements.firstName.value;
   const lastName = inputElements.lastName.value;
   const age = inputElements.age.value;
   const password = inputElements.password.value;
   
    if(!firstName || !lastName || !age || !password){
        addError('لطفا فرم را تکمیل کنید!')
    }
    else if (+age<18){
        addError('شما به سن قانونی نرسیده اید!')
    }
    else if (password.length<8){
        addError('رمز عبور حداقل 8 کاراکتر باشد!')
    }
    else{
        document.querySelector('ul').outerHTML= '<h1>ثبت نام شما تکمیل شد !</h1>'
    }
})