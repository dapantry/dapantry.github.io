function storeData(){
  // Creating a new document
  const messageText= document.querySelector("message_text");
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
// create a constant that refers to id
const list_div= document.querySelector("#list_div"); // create constant that 
//uses id from html as parameter
db.collection("Chat").onSnapshot(function(querySnapshot){
    list_item.innerHTML+= doc.data().message
  }
                        
}
