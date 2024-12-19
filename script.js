// Arrays to store product data
let products = [];
let quantities = [];
let prices = [];

// Function to add a product
function addProduct() {
  const productName = document.getElementById("productName").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const price = parseFloat(document.getElementById("price").value);

  if (productName && quantity > 0 && price > 0) {
    products.push(productName);
    quantities.push(quantity);
    prices.push(price);
    alert("Product added successfully!");
    document.getElementById("productName").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
  } else {
    alert("Please fill in all fields with valid values.");
  }
}

// Function to calculate the total amount
function calculateTotal() {
  let totalAmount = 0;
  for (let i = 0; i < products.length; i++) {
    totalAmount += quantities[i] * prices[i];
  }

  const discount = parseFloat(document.getElementById("discount").value);
  if (isNaN(discount) || discount < 0 || discount > 100) {
    alert("Please enter a valid discount percentage (0-100).");
    return;
  }

  const discountAmount = (totalAmount * discount) / 100;
  const finalAmount = totalAmount - discountAmount;

  document.getElementById("result").innerHTML = `
    Total Amount: Rs${totalAmount.toFixed(2)}<br>
    Discount: ${discount}%<br>
    Final Amount: Rs${finalAmount.toFixed(2)}
  `;
}
