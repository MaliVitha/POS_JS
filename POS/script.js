const customerPage = document.getElementById('customerPage');
const itemListPage = document.getElementById('itemListPage');
const POSDashboard = document.getElementById('POSDashboard');

customerPage.style.display = 'none';
itemListPage.style.display = 'none';

function posClicked(){
   POSDashboard.style.display = 'block';
   customerPage.style.display = 'none';
}

function customerClicked(){
   POSDashboard.style.display = 'none';
   customerPage.style.display = 'block';
}

function stockClicked(){
   itemListPage.style.display = 'block';
   POSDashboard.style.display = 'none';
}