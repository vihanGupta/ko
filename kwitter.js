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

  function addUser()
  {
      user_name = document.getElementById("romm_name").value
      firebase.database().ref("/").child(user_name).update({
          blue:"adding user"
      });
  }