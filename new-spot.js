// the address of new spot get added to
//list of spots
//how do I link the names and addresses to
//gether?
// firebase code here
/*Comment*/
function storeInfo(){
  // Add a new document in collection "cities"
  var nameText= document.getElementById("name_text").value;
  var streetText= document.getElementById("street_text").value;
  var cityText= document.getElementById("city_text").value;
   var stateText= document.getElementById("state_text").value;
  var zipText= document.getElementById("zip_text").value;
db.collection("User_Data").doc().set({
    name: nameText,
    street: streetText,
    city:cityText,
    state:stateText,
    zip: zipText
})
.then(function() {
    window.alert("Submission has been successfully processed!");
})
.catch(function(error) {
    window.alert("Error writing document: ", error);
});
}
