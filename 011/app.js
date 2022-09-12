const wannaRegister = confirm("آیا قصد ثبت نام دارید؟")
if(wannaRegister){
    const firstName= prompt("نام خود را وارد نمایید")
    const lastName= prompt("نام خانوادگی خود را وارد نمایید")
    const age = +prompt("سن خود را وارد نمایید")
    const pw= prompt("رمز عبور خود را وارد نمایید")

    if(!firstName || !lastName || !age || !pw){
        alert("لطفا مجددا فرم را تکمیل نمایید")
    }
    else if(pw.length<6){
        alert("رمز عبور باید بیش از 6 کاراکتر باشد")
    }
    else if(age<18){
        alert("شما به سن قانونی نرسیده اید.")
    }
    else{
        alert(`${firstName} ${lastName} عزیز ثبت نام شما تکمیل شد. رمز عبور شما : ${pw}`)
    }
}