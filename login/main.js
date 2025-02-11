const container = document.getElementById('container')
const loginForm = document.getElementById('loginForm')
const signupForm = document.getElementById('signupForm')
const forgotForm = document.getElementById('forgotForm')

const signUpContainer = document.getElementById('signUpContainer')
const forgotPasswordContainer = document.getElementById('forgotPasswordContainer')

const signUpLink = document.getElementById('signUp')
const signInlink = document.getElementById('signInlink')
const forgotPsswordLink = document.getElementById('forgotPassword')
const backToLoginLink = document.getElementById('backToLogin')

signUpContainer.addEventListener('click', (e) =>{
    e.preventDefault();
    loginForm.parentElement.classList.remove('active');
    forgotPasswordContainer.classList.remove('active');
    signUpContainer.classList.add('active')
});

signInlink.addEventListener('click', (e) =>{
    e.preventDefault();
    loginForm.parentElement.classList.remove('active');
    signUpContainer.classList.remove('active');
    loginForm.parentElement.classList.add('active');
});
forgotPsswordLink.addEventListener('click', (e) =>{
    e.preventDefault();
    loginForm.parentElement.classList.remove('active');
    signUpContainer.classList.remove('active')
    forgotPasswordContainer.classList.add('active')
})

backToLoginLink.addEventListener('click', (e) =>{
    e.preventDefault(),
    forgotPasswordContainer.classList.remove('active')
    loginForm.parentElement.classList.add('active')
})

window.onload = () =>{
    loginForm.parentElement.classList.add('active')
}

loginForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const email = document.getElementById('loginEmail')
    const password = document.getElementById('loginPassword')

    if (email.value === "test@example.com" && password.value ==="password") {
        alert('موفقیت آمیز بود!')
        email.classList.add('invalid');
        password.classList.add('invalid')
    } else{
        alert('رمز عبور اشتباه است.')
        email.classList.add('invalid')
        password.classList.add('invalid')
    }
})

signupForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const username = document.getElementById('signupUsername')
    const email = document.getElementById('signupEmail')
    const phone = document.getElementById('signupPhone')
    const password = document.getElementById('signPassword')

    if (usernameme.value && email.value && phone.value && password.value) {
        alert('ثبت نام موفقیت آمیز بود !')
        username.classList.remove('invalid')
        email.classList.remove('invalid')
        phone.classList.remove('invalid')
        password.classList.remove('invalid')
    } else{
        username.classList.add('invalid')
        email.classList.add('invalid')
        phone.classList.add('invalid')
        password.classList.add('invalid')
    }
})

forgotForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const email = document.getElementById('forgotEmail')

    if (email.value) {
        alert('لینک بازیابی ایمیل برایتان ارسال شد')
        email.classList.remove('invalid')
    } else{
        alert('لطفا ایمیل خود را وارد کنید')
        email.classList.add('invalid')
    }
});

const darkmode = new Darkmode();
darkmode.showWidget();
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    darkmode.toggle();
});
