


var button=document.getElementsByClassName('button')[0];
button.addEventListener('click',function(e){
    e.preventDefault();
    var emaill=document.getElementById('emaill').value;
    var pass=document.getElementById('passwordd').value;

    //getting user data from the localStorage
   let retrievedData=localStorage.getItem('user');
   console.log(retrievedData);
   console.log('hackathon');
});