function logout(){
    localStorage.removeItem("User_Name");

    localStorage.removeItem("room_select");

    window.location  = "index.html";
}


//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyAlwBHpLmLeVWZynWZUot4A7k2N_V4FvqU",
    authDomain: "kwitter-6a8a3.firebaseapp.com",
    databaseURL: "https://kwitter-6a8a3-default-rtdb.firebaseio.com",
    projectId: "kwitter-6a8a3",
    storageBucket: "kwitter-6a8a3.appspot.com",
    messagingSenderId: "260795775775",
    appId: "1:260795775775:web:319e0e1ff41245a69d4e2a"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("User_Name");

 room_name = localStorage.getItem("room_select");
 
 document.getElementById("wel_come").innerHTML="Welcome " + user_name + " to #"+ room_name;

 function send(){
    New_message = document.getElementById("New_msg").value;

    firebase.database().ref(room_name).push({
          name:user_name,
          message:New_message,
          like:0
    });

    document.getElementById("New_msg").value = "";
 }
//yes