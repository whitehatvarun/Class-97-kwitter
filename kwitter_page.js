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

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("username");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         
        
        
//Start code
     console.log(firebase_message_id);
      console.log(message_data);
       name =  message_data['name'];
       message = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4>"+ name +"<img src = 'tick.png' class = 'user_tick'> </h4>";
       message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
       like_button = "<button class= 'btn btn-warning' id = "+firebase_message_id+" value="+like+" onclick = 'updateLike(this.id)' >";
       span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: "+ like + "</span> </button> <hr>";
       row = name_with_tag + message_with_tag + like_button + span_with_tag;
       document.getElementById("output").innerHTML += row;

      } });  }); }
getData();



function send()
{
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
      message: msg,
      like: 0,
      name: user_name
      
     });
     document.getElementById("msg").value = "";
}   

function logout()
{
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

function updateLike(message_id)
{
      //START CODE
     console.log("clicked on the like button" + message_id);
     button_id = message_id;
     likes = document.getElementById(button_id).value;
     updated_likes = Number(likes) + 1;
     console.log(updated_likes);

     firebase.database().ref(room_name).child(message_id).update({
          
      like: updated_likes

     });
      //END CODE
}


