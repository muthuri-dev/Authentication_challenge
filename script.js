
const username=document.getElementById('username').value;
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;

//signup function
function signup(event){
    event.preventDefault();

    var user={
        username:username,
        email:email,
        password:password
    }
   window.localStorage.setItem('user',JSON.stringify(user));
}

