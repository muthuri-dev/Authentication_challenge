
 var error=document.querySelector('.error');

//Authenticating user to the to-do page

var button=document.getElementsByClassName('button')[0];
button.addEventListener('click',async function(e){
    e.preventDefault();
    var emaill=document.getElementById('emaill').value;
    var pass=document.getElementById('passwordd').value;

    //getting user data from the localStorage
   let retrievedData=await localStorage.getItem('user');
   console.log(retrievedData);
   
   //converting the string back to object
    var userStored=JSON.parse(retrievedData); 
    
    //checking the valuables if they match manually
    console.log(emaill);
    console.log(pass);  
    console.log(userStored.email);
    console.log(userStored.password);


   //checking the user input and the values stored in the localStorage
   if(userStored==null){
    error.innerHTML='user not found sign in';
   }else if(emaill==userStored.email && pass== userStored.password){

    error.innerHTML='Successfull logged in';
     window.location.href='https://to-do-challenge.netlify.app/';
    
   }else{
    error.innerHTML='input values does not match';
   }
});

