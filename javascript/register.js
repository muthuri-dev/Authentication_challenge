
const username=document.getElementById('username');
const email=   document.getElementById('email');
const password=document.getElementById('password');


//submitting data to the local storage
var btn=document.getElementById('btn');
btn.addEventListener('click',function(event){
    event.preventDefault();
    var user={
        username:username.value,
        email:email.value,
        password:password.value
    }
    console.log(user);
    localStorage.setItem('user',JSON.stringify(user));
    console.log(localStorage.getItem('user'));

    //notifying the user for saved data
    var result=JSON.parse(localStorage.getItem('user'));
    window.alert('Data saved');
    console.log(result);

    //redirecting the user to another page/route after registration
    window.location.href='./services/login.html';
});

























//signup function
/*function signup(event){
    event.preventDefault();

    var user={
        username:username.value,
        email:email.value,
        password:password.value
    }
   window.localStorage.setItem('user',JSON.stringify(user));
  
}
*/
