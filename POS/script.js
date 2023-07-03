const customerPage = document.getElementById('customerPage');
const itemListPage = document.getElementById('itemListPage');
document.getElementById('');
customerPage.style.display = 'none';
itemListPage.style.display = 'none';
const POSDashboard = document.getElementById('POSDashboard');

function posClicked(){
   POSDashboard.style.display = 'block';
   customerPage.style.display = 'none';
itemListPage.style.display = 'none';
}
function customerClicked(){
customerPage.style.display = 'block';
POSDashboard.style.display = 'none';
itemListPage.style.display = 'none';
}
function stockClicked(){
   itemListPage.style.display = 'block';
   POSDashboard.style.display = 'none';
   customerPage.style.display = 'none';
}
 function reportClicked(){
//   .style.display = 'block';
   POSDashboard.style.display = 'none';
   customerPage.style.display = 'none';
   itemListPage.style.display = 'none';
 }