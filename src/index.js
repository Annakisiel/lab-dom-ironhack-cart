// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const priceValue = parseFloat(priceElement.textContent.replace('$', '')); 

  const quantityElement = product.querySelector('.quantity input');
  const quantityValue = parseInt(quantityElement.value);

  const subtotalValue = priceValue * quantityValue;

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.textContent = subtotalValue.toFixed(2);

  return subtotalValue;
}


function calculateAll() {
  
  // ITERATION 2 

  const products = document.querySelectorAll('.product');
  let totalValue = 0;

  products.forEach(product => {
    totalValue += updateSubtotal(product);
  });

  // ITERATION 3

  const totalElement = document.querySelector('#total-value span');
  totalElement.textContent = totalValue.toFixed(2);
}

document.getElementById('calculate').addEventListener('click', calculateAll);

// ITERATION 4

function removeProduct(event) {
  const button = event.target; 
  const productRow = button.closest('.product'); 
  productRow.remove(); 
  calculateAll(); 
}
const removeButtons = document.querySelectorAll('.btn-remove');
removeButtons.forEach(button => {
  button.addEventListener('click', removeProduct);
});

// ITERATION 5

function createProduct() {

  let createRow = document.querySelector(".create-product");
  let newProdNameInput = createRow.querySelector("input");
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  const newTableRow = document.createElement("tr");
  newTableRow.className = "product";
  newTableRow.innerHTML = `
  <td class="name">
  <span>${newProdNameValue}</span>
  </td>
    <td class="price">
      $
      <span>${newProdPriceValue}</span>
    </td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const parent = document.querySelector("#cart tbody");


  parent.appendChild(newTableRow);

  const removeBtn = newTableRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);

  newProdNameInput.value = "";
  newProdPriceInput.value = 0;
}
window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtns = document.querySelectorAll(".btn-remove");

  for (let inidiviualBtn of removeBtns) {
    inidiviualBtn.addEventListener("click", removeProduct);
  }

  const createBtn = document.querySelector("#create");
  if (createBtn) {
    createBtn.addEventListener("click", createProduct);
  }
});

document.getElementById('calculate').addEventListener('click', calculateAll);

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
