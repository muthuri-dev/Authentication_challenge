
const username=document.getElementById('username').value;
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;
const output=document.querySelector('.output');

//signup function
function signup(event){
    event.preventDefault();

    var user={
        username:username,
        email:email,
        password:password
    }
   localStorage.setItem('user',JSON.stringify(user));
   console.log(localStorage.getItem('user'));
   displayData();
}

function displayData(){
    let username,email,password=JSON.parse(localStorage.getItem('user'));
    output.innerHTML=`
    <ul>
        <li>${username}</li>
    </ul>
    `
}
















/*
 var userSerialized=JSON.stringify(user);
    localStorage.setItem('user',userSerialized);
    alert('saved');
console.log(userSerialized);



var userDeserialized=JSON.parse(localStorage.getItem('user'))

console.log(userDeserialized);

btn.addEventListener('click',function(e){
    e.preventDefault();
})*/