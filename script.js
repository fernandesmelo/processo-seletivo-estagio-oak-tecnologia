document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');
    const addProductBtn = document.getElementById('addProductBtn');
  
    addProductBtn.addEventListener('click', function () {
      productForm.reset();
      productForm.style.display = 'block';
      productList.style.display = 'none';
    });
  
    productForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const productName = document.getElementById('productName').value;
      const productDescription = document.getElementById('productDescription').value;
      const productValue = document.getElementById('productValue').value;
      const productAvailability = document.getElementById('productAvailability').value;
  
      const productItem = document.createElement('li');
      productItem.innerHTML = `<strong>${productName}</strong> - R$ ${productValue}`;
  
      productList.appendChild(productItem);
  
      const listItems = Array.from(productList.querySelectorAll('li'));
      listItems.sort((a, b) => {
        const priceA = parseFloat(a.innerText.split('R$')[1]);
        const priceB = parseFloat(b.innerText.split('R$')[1]);
        return priceA - priceB;
      });
  
      productList.innerHTML = '';
      listItems.forEach(item => {
        productList.appendChild(item);
      });
  
      productForm.reset();
      productForm.style.display = 'none';
      productList.style.display = 'block';
    });
  });
  