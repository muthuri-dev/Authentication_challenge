
var username=document.querySelector('#username').value;
var email=document.querySelector('#email').value;
var password=document.querySelector('#password').value;

var user={
    username:username,
    email:email,
    password:password
}
var userSerialized=JSON.stringify(user);
console.log(userSerialized);

localStorage.setItem('user',userSerialized);

var userDeserialized=JSON.parse(localStorage.getItem('user'))

console.log(userDeserialized);