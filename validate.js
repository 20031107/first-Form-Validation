
const form= document.getElementById('Form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const passWord = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  
  //checking inputs
  checkingInputs()
});

function checkingInputs(){
  //trimvalues
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
      const passwordValue = passWord.value.trim();
      const passwordConfirmValue = passwordConfirm.value.trim();


  
  
  
  if(userNameValue === ''){
    setErrorFor(userName, 'Username cannot be blank');
  }else{
    setSuccessFor(userName);
  }
  
  //email
  
     if(emailValue === ''){
  setErrorFor(email, 'Email cannot be blank');
}else if(!isEmail(emailValue)){
  setErrorFor(email, 'Email is not valid');
}else{
  setSuccessFor(email);
}
  
  //password
  if(passwordValue === ''){
    setErrorFor(passWord, 'Password cannot be blank');
  }else{
    setSuccessFor(passWord);
  }
  
  //password confirm
  if(passwordConfirmValue === ''){
    setErrorFor(passwordConfirm, 'Password confirm cannot be blank');
  }else if (passwordConfirmValue !==passwordValue){
      setErrorFor(passwordConfirm, 'passwords do not match');
  } else{
    setSuccessFor(passwordConfirm);
  }
  
  
}


//function for error and success

function setErrorFor(input, message){
  const inputBox = input.parentElement;
 const small = input.parentElement.querySelector('small');

  inputBox.className = 'input-box error';
  small.innerText = message
}

function setSuccessFor(input){
  const inputBox = input.parentElement;
  inputBox.className = 'input-box success'
  
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


  