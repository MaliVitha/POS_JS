const nameField = document.getElementById('nameField');
const telephoneField = document.getElementById('telephoneField');
const addressField = document.getElementById('addressField') ;
const nameLabel=document.getElementById('lbl1');
const telphoneLabel=document.getElementById('lbl2');
const addressLabel=document.getElementById('lbl3');
function saveButtonOnClicked() {
   console.log(nameField.value);
   console.log(addressField.value);
   console.log(telephoneField.value);
   nameLabel.innerText+=   ` ${nameField.value} `;
   telphoneLabel.innerText+=` ${telephoneField.value}`;
   addressLabel.innerText += ` ${addressField.value}` ;
}