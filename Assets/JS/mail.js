const firebaseConfig = {
    apiKey: "AIzaSyB1Yyu5K1P0t8Wiw_oFjpx9QYzebRemccM",
    authDomain: "portfolio-e2852.firebaseapp.com",
    databaseURL: "https://portfolio-e2852-default-rtdb.firebaseio.com",
    projectId: "portfolio-e2852",
    storageBucket: "portfolio-e2852.appspot.com",
    messagingSenderId: "296427659887",
    appId: "1:296427659887:web:fb5d595a6f3cc36b8e639a",
    measurementId: "G-B6K0WWEGN8"
  };

  //initialize firebase
firebase.initializeApp(firebaseConfig);

//referencing a database
var contactFormDb = firebase.database().ref('contactForm');

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var message = getElementVal("message");   

    console.log(name, email, message);
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};