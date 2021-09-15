
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCRKlZQfK9vz08P9q5rJBSp4FIF3gGKFXE",
      authDomain: "kwitter-eedb1.firebaseapp.com",
      databaseURL: "https://kwitter-eedb1-default-rtdb.firebaseio.com",
      projectId: "kwitter-eedb1",
      storageBucket: "kwitter-eedb1.appspot.com",
      messagingSenderId: "6516997834",
      appId: "1:6516997834:web:638956ccbdbadb84e97e33",
      measurementId: "G-V3QQLHE1PT"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
