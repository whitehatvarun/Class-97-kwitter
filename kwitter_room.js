
var firebaseConfig = {
      apiKey: "AIzaSyDmlt78d_jwRRzXihr1IsUqgLV-UwbBo5I",
      authDomain: "kwitter-55058.firebaseapp.com",
      databaseURL: "https://kwitter-55058-default-rtdb.firebaseio.com",
      projectId: "kwitter-55058",
      storageBucket: "kwitter-55058.appspot.com",
      messagingSenderId: "517880216964",
      appId: "1:517880216964:web:f60b86839f8bab4a3f31d1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
       purpose: "AddingRoomnames"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //START C0DE
     console.log("room name " + room_name);
     row = "<div class='room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr>"; 
     document.getElementById("output").innerHTML += row;
      //END CODE
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
     localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}


