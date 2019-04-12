const spotsList= document.querySelector('#spots-list');
function renderNames(doc){
 let li= document.createElement('li');
 let street= document.createElement('span'); 
 let city= document.createElement('span'); 
 let state= document.createElement('span'); 
 let zipcode= document.createElement('span'); 
  li.setAttribute('data-id', doc.id);
  street.textContent= doc.data().city;
  city.textContent= doc.data().city;
  state.textContent= doc.data().city;
  zipcode.textContent= doc.data().city;
  
  li.appendChild(street);
  li.appendChild(city);
  li.appendChild(state);
  li.appendChild(zipcode);
  spotsList.appendChild(li);
}
db.collection('Spots').get().then((snapshot)=>{
                                  snapshot.docs.forEach(doc=>{
                                  renderNames(doc);
                                  })
                                  })
