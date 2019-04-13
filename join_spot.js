 <script src="https://www.gstatic.com/firebasejs/5.9.3/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.9.3/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.9.3/firebase-firestore.js"></script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCELzJ67A2wtip9eNOa8GE6hdbjSgkQfoc",
    authDomain: "steel-ace-237315.firebaseapp.com",
    databaseURL: "https://steel-ace-237315.firebaseio.com",
    projectId: "steel-ace-237315",
    storageBucket: "steel-ace-237315.appspot.com",
    messagingSenderId: "998808689711"
  };
  firebase.initializeApp(config);
    // Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
const spotsList= document.querySelector('#spots-list');
function renderNames(doc){
 let li= document.createElement('li');
 let name= document.createElement('span'); 
 let street= document.createElement('span'); 
 let city= document.createElement('span'); 
 let state= document.createElement('span'); 
 let zipcode= document.createElement('span'); 
  li.setAttribute('data-id', doc.id);
  name.textContent= doc.data().name;
  street.textContent= doc.data().street;
  city.textContent= doc.data().city;
  state.textContent= doc.data().state; 
  zipcode.textContent= doc.data().zip; 
  
  li.appendChild(name);
  li.appendChild(street);
  li.appendChild(city);
  li.appendChild(state);
  li.appendChild(zipcode);
  spotsList.appendChild(li);
}
db.collection('User_Data').get().then((snapshot)=>{
                                  snapshot.docs.forEach(doc=>{
                                 renderNames(doc);
                                  })
                                  })
function storeInfo(){
  // Creating a new document
  var messageText= document.getElementById("message_text").value;
db.collection("Chat").doc().set({
    message: messageText
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}

