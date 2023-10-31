/**
 * 
 */
 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyChKUPRm56oSxru7mF0nvkDVT-ZJR76Ilo",
    authDomain: "create-login-registration-page.firebaseapp.com",
    projectId: "create-login-registration-page",
    storageBucket: "create-login-registration-page.appspot.com",
    messagingSenderId: "861794149044",
    appId: "1:861794149044:web:61de914a1e1d4212af6de1"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
 
 document.getElementById("reg-btn").addEventListener('click', function(){
	document.getElementById("register-div").style.display="inline";
	document.getElementById("login-div").style.display="none";

});

 document.getElementById("log-btn").addEventListener('click', function(){
	document.getElementById("register-div").style.display="none";
	document.getElementById("login-div").style.display="inline";

});

document.getElementById("login-btn").addEventListener('click', function(){
	const loginEmail = document.getElementById('login-email').value;
	const loginPassword = document.getElementById('login-password').value;
	
	signInWithEmailAndPassword(auth, loginEmail, loginPassword)
	  .then((userCredential) => {
	    const user = userCredential.user;
	    document.getElementById("result-box").style.display="inline";
	    document.getElementById("login-div").style.display="none";
	    document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
	  })
	  .catch((error) => {
	    const errorCode = error.code;
	    const errorMessage = error.message;
	    document.getElementById("result-box").style.display="inline";
	    document.getElementById("login-div").style.display="none";
	    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
	  });
});

document.getElementById("register-btn").addEventListener('click', function(){
	const registerEmail = document.getElementById('register-email').value;
	const registerPassword = document.getElementById('register-password').value;
	
	createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
	  .then((userCredential) => {
	    const user = userCredential.user;
	    document.getElementById("result-box").style.display="inline";
	    document.getElementById("register-div").style.display="none";
	    document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
	  })
	  .catch((error) => {
	    const errorCode = error.code;
	    const errorMessage = error.message;
	    document.getElementById("result-box").style.display="inline";
	    document.getElementById("register-div").style.display="none";
	    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
	  });
});


document.getElementById("logout-btn").addEventListener('click', function(){
	signOut(auth).then(() => {
		  document.getElementById("result-box").style.display="none";
		  document.getElementById("login-div").style.display="inline";
	  
		}).catch((error) => {
				document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
		});
})
