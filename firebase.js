import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCitQuz7S3Yd_Iw48Q8RO9QjGyN5bUSr14",
  authDomain: "labqux.firebaseapp.com",
  projectId: "labqux",
  storageBucket: "labqux.appspot.com",
  messagingSenderId: "988531355697",
  appId: "1:988531355697:web:0955ce6a94926592102510"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Registered Successfully!"))
    .catch(e => alert(e.message));
};

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Login Successful!"))
    .catch(e => alert(e.message));
};

window.loginWithGoogle = function () {
  signInWithPopup(auth, provider)
    .then(result => alert("Logged in as " + result.user.email))
    .catch(e => alert(e.message));
};
